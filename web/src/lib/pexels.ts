/**
 * Helpers for the Pexels-hosted photography.
 *
 * The images are hotlinked rather than bundled, which is fine — Pexels
 * content-negotiates AVIF (`Vary: Accept`) and caches for a year, so it already
 * out-delivers our own origin. What it cannot do is guess the size we need, and
 * every URL on the site was hard-coded to a single large crop: 1400x1750 sources
 * for 403x504 slots, portrait sources cropped into 2:1 slots, and the same
 * 2400x1500 background on every page. A phone downloaded the desktop bytes
 * because nothing carried a `srcset`.
 *
 * `px()` rebuilds a URL at a given size and `pxSet()` produces the candidate
 * list, so a slot declares its real dimensions once and the browser picks.
 */

/** Rebuild a Pexels URL at an explicit size. Passing `h` forces the crop. */
export function px(url: string, w: number, h?: number): string {
  const path = url.split("?")[0];
  const q = new URLSearchParams({
    auto: "compress",
    cs: "tinysrgb",
    w: String(w),
  });
  if (h) {
    q.set("h", String(h));
    q.set("fit", "crop");
  }
  return `${path}?${q.toString()}`;
}

/**
 * Build a `srcset` from candidate widths, holding `ratio` (width / height).
 * Omit `ratio` to let Pexels keep the source aspect.
 */
export function pxSet(url: string, widths: number[], ratio?: number): string {
  return widths
    .map((w) => `${px(url, w, ratio ? Math.round(w / ratio) : undefined)} ${w}w`)
    .join(", ");
}
