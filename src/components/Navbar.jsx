import React, { useEffect, useState } from "react";
import { navLinks } from "../Constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          ↁev€minence ⨁
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-5">
          <a href="#contact">
            <div className="px-5 py-2 rounded-lg bg-stone-900 text-white hover:bg-white-50 transition-colors duration-300 hover:text-black-100">
              <span>Resume</span>
            </div>
          </a>
          <a href="#contact" className="contact-btn group">
            <div className="inner ">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}
