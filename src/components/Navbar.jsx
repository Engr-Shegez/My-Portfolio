import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const showNavbarSurface = scrolled || isOpen;

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled((prev) => (prev === isScrolled ? prev : isScrolled));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4">
      <div className="mx-auto max-w-7xl px-6 pt-2">
        <div
          className={`relative rounded-[2rem] px-4 transition-all duration-300 ${
            showNavbarSurface
              ? "bg-black/70 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl"
              : "bg-black/50 shadow-none backdrop-blur-0"
          }`}
        >
          {/* TOP BAR */}
          <div
            className={`flex items-center justify-between gap-4 rounded-full p-3 transition-all duration-300 ${
              showNavbarSurface
                ? "border border-white/10"
                : "border border-transparent"
            }`}
          >
            <a
              className="text-lg font-semibold tracking-tight text-zinc-100"
              href="#hero"
            >
              ↁev€minence ⨁
            </a>

            {/* DESKTOP NAV */}
            <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-100">
              {navLinks.map(({ link, name }) => (
                <a key={name} href={link} className="relative group">
                  {name}
                  <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-black transition-all group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* RIGHT ACTIONS */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="/Adeleke CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full border border-black/10 text-zinc-100 hover:bg-zinc-800 text-sm"
              >
                Resume
              </a>

              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-sm font-medium backdrop-blur-sm">
                {/* Glowing Dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_3px_rgba(34,197,94,0.6)]"></span>
                </span>
                Available
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <div className="md:hidden flex items-center gap-3">
              {/* Availability Dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500"></span>
              </span>

              {/* Hamburger */}
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className={`inline-flex size-10 items-center justify-center rounded-full transition-colors duration-300 ${
                  showNavbarSurface
                    ? "border border-white/10 bg-zinc-700"
                    : "border border-white/20 bg-black/20"
                }`}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="mt-4 rounded-3xl border border-white/10 bg-black/80 p-4 shadow-xl backdrop-blur-xl md:hidden"
              >
                <div className="flex flex-col gap-3">
                  {navLinks.map(({ link, name }) => (
                    <a
                      key={name}
                      href={link}
                      onClick={() => setIsOpen(false)}
                      className="px-4 py-2 rounded-xl text-center hover:bg-zinc-700"
                    >
                      {name}
                    </a>
                  ))}

                  <a
                    href="/Adeleke CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-center border border-black/10 hover:bg-zinc-700"
                  >
                    Resume
                  </a>

                  <a
                    href="#contact"
                    className="px-4 py-2 rounded-xl text-center bg-black hover:bg-zinc-700 text-white"
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

<a
  href="#contact"
  className="px-4 py-2 rounded-xl text-center bg-black hover:bg-zinc-700 text-white"
>
  Contact
</a>;
