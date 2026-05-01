import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(
    navLinks[0]?.link ?? "#work",
  );
  const prefersReducedMotion = useReducedMotion();
  const MotionDiv = motion.div;
  const showNavbarSurface = scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 24;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map(({ link }) => document.querySelector(link))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target?.id) {
          setActiveSection(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.15, 0.35, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-1 sm:px-4">
      <div className="mx-auto max-w-7xl">
        <div
          className={`rounded-[1.65rem] border transition-all duration-200 ${
            showNavbarSurface
              ? "border-white/10 bg-[rgba(8,10,15,0.8)] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "border-transparent bg-transparent backdrop-blur-0"
          }`}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
            <a
              className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-slate-100 transition-colors hover:text-white"
              href="#hero"
              onClick={() => setIsOpen(false)}
            >
              {/* <span className="inline-flex size-2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.45)]" />
              Elijah */}
              <img
                src="/images/my-logo.jpg"
                alt="name"
                className="size-14 object-cover md:size-16"
              />
            </a>

            <nav className="hidden items-center gap-1 rounded-full border border-white/6 bg-white/[0.03] p-1 md:flex">
              {navLinks.map(({ link, name }) => {
                const isActive = activeSection === link;

                return (
                  <a
                    key={name}
                    href={link}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-white text-slate-950 shadow-[0_8px_24px_rgba(255,255,255,0.12)]"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {name}
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="/Adeleke CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/12 px-4 py-2 text-sm font-medium text-slate-200 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                Resume
              </a>

              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-2 text-sm font-medium text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-300" />
                Available for work
              </span>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                <span className="size-2 rounded-full bg-emerald-300" />
                Open
              </span>

              <button
                type="button"
                aria-expanded={isOpen}
                aria-label={
                  isOpen ? "Close navigation menu" : "Open navigation menu"
                }
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex size-11 items-center justify-center rounded-full border transition-all duration-200 ${
                  showNavbarSurface
                    ? "border-white/12 bg-white/[0.05] text-white"
                    : "border-white/16 bg-black/20 text-slate-100"
                }`}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <MotionDiv
                initial={prefersReducedMotion ? false : { opacity: 0, y: -12 }}
                animate={
                  prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
                }
                exit={
                  prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
                }
                transition={{ duration: prefersReducedMotion ? 0 : 0.18 }}
                className="border-t border-white/8 px-4 pb-4 pt-3 md:hidden"
              >
                <div className="rounded-[1.5rem] bg-white/[0.03] p-2">
                  <div className="flex flex-col gap-1.5">
                    {navLinks.map(({ link, name }) => {
                      const isActive = activeSection === link;

                      return (
                        <a
                          key={name}
                          href={link}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-[1rem] px-4 py-3 text-base font-medium transition-colors ${
                            isActive
                              ? "bg-white text-slate-950"
                              : "text-slate-200 hover:bg-white/[0.05]"
                          }`}
                        >
                          {name}
                        </a>
                      );
                    })}

                    <a
                      href="/Adeleke CV.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="rounded-[1rem] border border-white/10 px-4 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.05]"
                    >
                      Resume
                    </a>

                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="rounded-[1rem] bg-white px-4 py-3 text-base font-semibold text-slate-950"
                    >
                      Start a conversation
                    </a>
                  </div>
                </div>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
