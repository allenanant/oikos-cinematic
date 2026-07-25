/**
 * Shared rules for the two scroll-scrubbed background videos.
 *
 * Both the hero and the interlude used to ship a `src` in the static markup with
 * `preload="auto"`, so the browser started pulling 27 MB during HTML parse — on
 * every device, phones included. The components now render the <video> with no
 * source at all and only assign one after `canPlayVideo()` passes, which is the
 * only way to guarantee zero video bytes under a static export (there is no
 * server to branch on user agent, and `media` on a <source> inside <video> is
 * not honoured the way it is inside <picture>).
 */

/**
 * Desktop pointer devices only. `pointer: fine` excludes phones and tablets
 * including iPad in desktop-UA mode, which reports `pointer: coarse`.
 *
 * 901px rather than 900: the mobile CSS breakpoints are `max-width: 900px`, so
 * a 900px viewport would otherwise satisfy both this query and the mobile
 * layout at once.
 */
export const VIDEO_MEDIA_QUERY = "(min-width: 901px) and (pointer: fine)";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

/** Frame rate of the delivered clips — seeks are snapped to this grid. */
export const SRC_FPS = 24;

/** Just under one frame, so we never flush the decoder for the frame already shown. */
export const SEEK_EPS = 0.9 / SRC_FPS;

/**
 * How long to wait for a full buffer before giving up on the video.
 *
 * Without this, a stalled download leaves the clip permanently un-ready while
 * the ScrollTrigger pin is already in place — so the visitor scrolls roughly two
 * and a half viewports through a frozen poster with no way out. On timeout the
 * caller drops the pin and the section degrades to the static poster block
 * mobile already gets.
 *
 * Start this timer when the download starts, NOT on mount: the interlude only
 * begins fetching once it is near the viewport, which can be minutes later.
 */
export const BUFFER_TIMEOUT_MS = 10_000;

export function canPlayVideo(): boolean {
  if (typeof window === "undefined") return false;

  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } })
    .connection;

  return (
    window.matchMedia(VIDEO_MEDIA_QUERY).matches &&
    conn?.saveData !== true &&
    !window.matchMedia(REDUCED_MOTION_QUERY).matches
  );
}

/**
 * The last frame we can actually seek to and expect a decoded picture.
 * Seeking to `duration` itself lands past the final sample.
 */
export function lastFrameTime(video: HTMLVideoElement): number {
  return Math.max(video.duration - 1 / SRC_FPS, 0);
}

/**
 * True once the clip is buffered through its last usable frame.
 *
 * Scrubbing before this point is what made the page feel broken on a slow line:
 * seeking outside the buffered range issues an HTTP range request, and the rAF
 * loop issued a new one every frame, which kept cancelling the sequential
 * download. The video never finished buffering *because* the user was scrolling.
 * Holding the poster until this returns true converts that livelock into a plain
 * download.
 *
 * The end guard is one frame rather than an arbitrary 0.25s, so it agrees with
 * `lastFrameTime()` — otherwise the reverse-playing interlude could seek to a
 * frame that was not actually buffered yet.
 */
export function isFullyBuffered(video: HTMLVideoElement): boolean {
  const d = video.duration;
  if (!isFinite(d) || !d) return false;
  const end = lastFrameTime(video);
  const b = video.buffered;
  for (let i = 0; i < b.length; i++) {
    if (b.start(i) <= 0.05 && b.end(i) >= end) return true;
  }
  return false;
}

/**
 * Call `onChange` whenever video eligibility could have flipped.
 *
 * The gate used to be evaluated once on mount, so resizing a desktop window
 * down to phone width left the clip streaming and the section pinned, and a
 * bfcache restore could revive the page under conditions that no longer hold.
 */
export function watchEligibility(onChange: () => void): () => void {
  const queries = [
    window.matchMedia(VIDEO_MEDIA_QUERY),
    window.matchMedia(REDUCED_MOTION_QUERY),
  ];
  queries.forEach((q) => q.addEventListener("change", onChange));
  window.addEventListener("pageshow", onChange);

  return () => {
    queries.forEach((q) => q.removeEventListener("change", onChange));
    window.removeEventListener("pageshow", onChange);
  };
}
