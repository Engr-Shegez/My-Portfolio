import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    <header className="sticky overflow-hidden top-0 z-50  dark:bg-transparent backdrop-blur-md  left-0 right-0 px-2 sm:px-4  border-slate-100 ">
      <div className="mx-auto max-w-7xl px-6 pt-2">
        <div
          className={`relative rounded-full px-4 backdrop-blur-xl transition-all duration-300
          ${
            scrolled
              ? " shadow-[0_18px_60px_rgba(0,0,0,0.08)]"
              : "bg-transparent"
          }`}
        >
          {/* TOP BAR */}
          <div className="flex items-center justify-between border rounded-full p-3  gap-4">
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

              <a
                href="#contact"
                className="px-4 py-2 rounded-full bg-black text-white text-sm hover:bg-zinc-800"
              >
                Contact
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden inline-flex size-10 items-center justify-center rounded-full border border-black/10 bg-zinc-700"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* MOBILE MENU */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="mt-4 rounded-3xl border border-black/10  p-4 shadow-xl backdrop-blur-xl md:hidden"
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
