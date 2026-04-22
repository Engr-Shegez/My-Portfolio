import React, { useRef } from "react";

export default function GlowCard({ card, children }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (
      typeof window !== "undefined" &&
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card reveal-surface rounded-[1.5rem] p-6 md:p-8 mb-5 break-inside-avoid-column"
    >
      <div className="glow" />
      <div className="mb-5 flex items-center gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <img src="/images/star.png" key={i} alt="star" className="size-5" />
        ))}
      </div>
      <div className="mb-6">
        <p className="text-pretty text-base leading-7 text-slate-300 md:text-lg">
          {card.review}
        </p>
      </div>
      {children}
    </div>
  );
}
