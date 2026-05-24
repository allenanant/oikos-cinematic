export function Footer() {
  return (
    <footer className="bg-forest text-cream/55 border-t border-cream/10">
      <div className="mx-auto w-full max-w-[1480px] px-6 md:px-12 py-12 md:py-16">
        {/* Masthead row — newspaper colophon style */}
        <div className="grid grid-cols-12 gap-x-6 gap-y-10 items-start pb-10 md:pb-12 border-b border-cream/12">
          <div className="col-span-12 md:col-span-4">
            <div className="display text-cream text-[28px] md:text-[34px] leading-none">
              <span className="italic">oikos</span>
              <span className="text-gold">.</span>
            </div>
            <p className="mt-4 text-cream/60 text-[13.5px] leading-[1.7] max-w-[34ch]">
              A small practice in Delhi for biophilic interiors, conscious
              gifting, and the quiet upkeep of workplaces.
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="eyebrow text-cream/45 mb-3">Index</div>
            <ul className="space-y-2 text-[13px]">
              <li><a href="#letter" className="hover:text-cream transition-colors">I · Letter</a></li>
              <li><a href="#etymology" className="hover:text-cream transition-colors">II · Etymology</a></li>
              <li><a href="#practice" className="hover:text-cream transition-colors">III · Practice</a></li>
              <li><a href="#begin" className="hover:text-cream transition-colors">IV · Correspondence</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-3">Correspondence</div>
            <ul className="space-y-2 text-[13px]">
              <li>
                <a
                  href="mailto:angelina@oikosbyangelina.com"
                  className="hover:text-cream transition-colors"
                >
                  angelina@oikosbyangelina.com
                </a>
              </li>
              <li>
                <a href="tel:+919999999999" className="hover:text-cream transition-colors">
                  +91 99 9999 9999
                </a>
              </li>
              <li className="text-cream/45 text-[12px] pt-1">
                Lodi Road, New Delhi 110003
              </li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow text-cream/45 mb-3">Colophon</div>
            <p className="text-[12.5px] leading-[1.7] text-cream/60">
              Set in EB Garamond and Inter. Printed for the screen in
              Spring 2026. All photographs commissioned for Oikos or
              licensed from working photographers.
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 pt-8 text-[11.5px] tracking-[0.18em] uppercase text-cream/40">
          <div>© {new Date().getFullYear()} · Oikos by Angelina · Vol. I, Issue 01</div>
          <div className="display italic normal-case tracking-normal text-cream/50">
            For a life that steadies you.
          </div>
          <div className="flex items-center gap-5">
            <a href="#top" className="hover:text-cream transition-colors">Return to top ↑</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
