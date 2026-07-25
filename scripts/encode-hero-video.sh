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
#   H.264 only. AV1 measured 1.21 MB at VMAF 92.4 (smaller AND better), but
#   browser seek behaviour under scroll-scrubbing is the risk, and these clips
#   are scrubbed rather than played. Not worth the gamble on a client site
#   without an A/B; revisit with real measurements if the size matters.
#
# Usage: bash scripts/encode-hero-video.sh            # both clips, default frames
#        bash scripts/encode-hero-video.sh hero:0     # one clip, explicit frame
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
# Masters live outside web/public so they are never copied into the deploy.
SRC_DIR="$DIR/video-masters"
OUT_DIR="$DIR/web/public/cinematic"

WIDTH=1600
HEIGHT=900
GOP=12
X264_CRF=23

encode_one() {
  local name="$1"           # e.g. "hero"
  local poster_frame="$2"   # frame the section OPENS on - see the note below
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

  echo "==> $name : poster from frame $poster_frame"
  # The poster MUST be the frame the section opens on, or the cross-fade from
  # poster to video is a visible jump in the camera position. `hero` scrubs
  # forward from t=0, so it opens on frame 0. `hero-v2` is rendered with
  # `reverse`, so it opens on the last frame. It is also the only image mobile
  # ever sees, since the video never loads there.
  ffmpeg -v error -y -i "$src" \
    -vf "select=eq(n\,${poster_frame}),scale=${WIDTH}:-2" -fps_mode passthrough -frames:v 1 \
    "$OUT_DIR/$name-poster.png"

  # WebP only: it is both the `poster` attribute and the CSS background, so one
  # file is one request. AVIF would save ~6 KB and cost a second format to keep
  # in sync. Support is universal from Safari 14.
  ffmpeg -v error -y -i "$OUT_DIR/$name-poster.png" \
    -c:v libwebp -quality 60 "$OUT_DIR/$name-poster.webp"
  rm -f "$OUT_DIR/$name-poster.png"
}

# <clip>:<poster frame>. 192 is the last frame of a 193-frame clip.
# Set positionally rather than via "${@:-...}", which expands the whole default
# as a single word.
if [ "$#" -eq 0 ]; then
  set -- hero:0 hero-v2:192
fi

# One at a time — never run these encodes concurrently.
for spec in "$@"; do
  encode_one "${spec%%:*}" "${spec##*:}"
done

echo
echo "Done. Sizes:"
ls -la "$OUT_DIR" | awk '{printf "  %-28s %10s\n", $9, $5}'
