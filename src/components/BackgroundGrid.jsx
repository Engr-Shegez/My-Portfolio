import React from "react";

export default function BackgroundGrid() {
  return (
    <div aria-hidden="true" className="background-grid">
      <div className="background-grid__base" />
      <div className="background-grid__lines" />
      <div className="background-grid__fade" />
    </div>
  );
}
