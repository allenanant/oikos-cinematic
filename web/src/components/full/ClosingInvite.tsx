import { px, pxSet } from "@/lib/pexels";

type Props = {
  eyebrow?: string;
  title?: React.ReactNode;
  dek?: string;
  ctaLabel?: string;
  ctaHref?: string;
  note?: string;
  img?: string;
  alt?: string;
};

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const DEFAULT_IMG =
  "https://images.pexels.com/photos/32477165/pexels-photo-32477165/free-photo-of-modern-indoor-garden-with-tables-and-seating.jpeg?auto=compress&cs=tinysrgb&w=2400&h=1500&fit=crop";

export default function ClosingInvite({
  eyebrow = "· a brief is the beginning",
  title = (
    <>
      Tell us about the <em>space</em> you have in mind.
    </>
  ),
  dek = "Every project begins with a conversation.",
  ctaLabel = "Begin with your space",
  ctaHref = `${BASE}/contact/`,
  note = "Take your first step towards a sustainable future.",
  img = DEFAULT_IMG,
  alt = "A finished, light-filled room seen from the doorway",
}: Props) {
  return (
    <section className="full-closing" id="brief">
      <div className="closing-bg">
        {/* This sits at the very bottom of seven routes. Without loading="lazy"
            React preloads it at high priority, so 400+ KB of footer decoration
            was racing the hero for bandwidth on every page. */}
        <img
          src={px(img, 1600, 900)}
          srcSet={pxSet(img, [800, 1200, 1600, 2000], 16 / 9)}
          sizes="100vw"
          alt={alt}
          width={1600}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="closing-inner" data-reveal>
        <h2>{title}</h2>
        <p className="dek">{dek}</p>
        <a href={ctaHref} className="closing-cta" data-cursor>
          {ctaLabel} <span className="arr" />
        </a>
        <span className="closing-note">{note}</span>
      </div>
    </section>
  );
}
