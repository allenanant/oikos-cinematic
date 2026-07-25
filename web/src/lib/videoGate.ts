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
 */
export const VIDEO_MEDIA_QUERY = "(min-width: 900px) and (pointer: fine)";

/** Frame rate of the delivered clips — seeks are snapped to this grid. */
export const SRC_FPS = 24;

/** Just under one frame, so we never flush the decoder for the frame already shown. */
export const SEEK_EPS = 0.9 / SRC_FPS;

export function canPlayVideo(): boolean {
  if (typeof window === "undefined") return false;

  const conn = (navigator as Navigator & { connection?: { saveData?: boolean } })
    .connection;

  return (
    window.matchMedia(VIDEO_MEDIA_QUERY).matches &&
    conn?.saveData !== true &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

/**
 * True once the whole clip is buffered.
 *
 * Scrubbing before this point is what made the page feel broken on a slow line:
 * seeking outside the buffered range issues an HTTP range request, and the rAF
 * loop issued a new one every frame, which kept cancelling the sequential
 * download. The video never finished buffering *because* the user was scrolling.
 * Holding the poster until this returns true converts that livelock into a plain
 * download.
 */
export function isFullyBuffered(video: HTMLVideoElement): boolean {
  const d = video.duration;
  if (!isFinite(d) || !d) return false;
  const b = video.buffered;
  for (let i = 0; i < b.length; i++) {
    if (b.start(i) <= 0.05 && b.end(i) >= d - 0.25) return true;
  }
  return false;
}
