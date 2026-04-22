import React from "react";

export default function Button({ text, className, id }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById("counter");

        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;
          const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

          window.scrollTo({
            top,
            behavior: prefersReducedMotion ? "auto" : "smooth",
          });
        }
      }}
      aria-label={text}
      className={`${className ?? ""} cta-wrapper`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </button>
  );
}
