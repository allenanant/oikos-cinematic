#!/usr/bin/env bash
# Encode the scroll-scrubbed hero videos for web delivery.
#
# Why these settings:
#   The originals were all-intra (every frame a keyframe) at 1080p, which is why
#   an 8-second clip cost 18.6 MB. Scroll-scrubbing does need keyframes close
#   together so seeks land fast, but every frame is overkill — a GOP of 12
#   (a keyframe every 0.5s at 24fps) seeks just as well in practice and costs
#   ~87% fewer bytes. Measured VMAF against the original stays above 91.
#
#   1600x900 rather than 1920x1080: the video is a full-bleed background behind
#   an overlay and text. At 1600 wide the measured VMAF is the same as 1080p at
#   a smaller size (3.22 MB vs 3.78 MB for the same score).
#
#   AV1 ships first, H.264 as the fallback source. AV1 lands at roughly half the
#   H.264 size at higher quality.
#
# Usage: bash scripts/encode-hero-video.sh
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# Masters live outside web/public so they are never copied into the deploy.
SRC_DIR="$DIR/video-masters"
OUT_DIR="$DIR/web/public/cinematic"

WIDTH=1600
HEIGHT=900
GOP=12
X264_CRF=23
AV1_CRF=34

encode_one() {
  local name="$1"           # e.g. "hero"
  local src="$SRC_DIR/$name-source.mp4"

  if [ ! -f "$src" ]; then
    echo "!! missing source: $src" >&2
    echo "   (keep the original high-bitrate master as <name>-source.mp4)" >&2
    return 1
  fi

  echo "==> $name : H.264 ${WIDTH}x${HEIGHT} GOP${GOP} CRF${X264_CRF}"
  ffmpeg -v error -y -i "$src" -an \
    -vf "scale=${WIDTH}:${HEIGHT}" \
    -c:v libx264 -preset veryslow -crf "$X264_CRF" \
    -g "$GOP" -keyint_min "$GOP" -sc_threshold 0 \
    -pix_fmt yuv420p -movflags +faststart \
    "$OUT_DIR/$name.mp4"

  echo "==> $name : AV1 ${WIDTH}x${HEIGHT} GOP${GOP} CRF${AV1_CRF}"
  ffmpeg -v error -y -i "$src" -an \
    -vf "scale=${WIDTH}:${HEIGHT}" \
    -c:v libsvtav1 -preset 4 -crf "$AV1_CRF" \
    -g "$GOP" \
    -pix_fmt yuv420p -movflags +faststart \
    "$OUT_DIR/$name.av1.mp4" 2>/dev/null

  echo "==> $name : posters"
  # Last frame is the "after" state — the one worth showing when the video
  # never plays (mobile) or has not buffered yet.
  ffmpeg -v error -y -i "$src" \
    -vf "select=eq(n\,192),scale=${WIDTH}:-2" -fps_mode passthrough -frames:v 1 \
    "$OUT_DIR/$name-poster.png"

  ffmpeg -v error -y -i "$OUT_DIR/$name-poster.png" \
    -c:v libaom-av1 -still-picture 1 -crf 40 -cpu-used 6 -f avif \
    "$OUT_DIR/$name-poster.avif" 2>/dev/null
  ffmpeg -v error -y -i "$OUT_DIR/$name-poster.png" \
    -c:v libwebp -quality 60 "$OUT_DIR/$name-poster.webp"
  ffmpeg -v error -y -i "$OUT_DIR/$name-poster.png" \
    -q:v 5 "$OUT_DIR/$name-poster.jpg"
  rm -f "$OUT_DIR/$name-poster.png"
}

# One at a time — never run these encodes concurrently.
for name in "$@"; do
  encode_one "$name"
done

echo
echo "Done. Sizes:"
ls -la "$OUT_DIR" | awk '{printf "  %-28s %10s\n", $9, $5}'
