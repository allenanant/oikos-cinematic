import type { ReactNode } from "react";

/**
 * A pass-through. The reveal animation is driven by the `[data-reveal]`
 * attribute and the shared IntersectionObserver in `full/Reveals.tsx`, not by
 * this component, so `delay` and `className` are accepted and deliberately
 * ignored rather than rejected.
 *
 * Widening the type (instead of rendering a wrapper) fixes 16 TypeScript errors
 * in the legacy section components without changing a single byte of output.
 * Those errors were only invisible because next.config.ts sets
 * `typescript.ignoreBuildErrors`.
 */
type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children }: Props) {
  return <>{children}</>;
}

export default Reveal;
