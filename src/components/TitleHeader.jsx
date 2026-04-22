import React from "react";

export default function TitleHeader({ title, sub }) {
  return (
    <div className="section-heading">
      <div className="hero-badge section-badge">
        <p>{sub}</p>
      </div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}
