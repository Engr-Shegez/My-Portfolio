import React from "react";

export default function MobileHeroVisual() {
  return (
    <div className="mobile-hero-visual" aria-hidden="true">
      <div className="mobile-hero-visual__glow" />
      <div className="mobile-hero-visual__ambient" />

      <div className="mobile-hero-visual__stage">
        <div className="mobile-hero-visual__float-card mobile-hero-visual__float-card--left">
          <span className="mobile-hero-visual__chip">UI System</span>
          <div className="mobile-hero-visual__metric">Design + Code</div>
          <div className="mobile-hero-visual__bars">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="mobile-hero-visual__device">
          <div className="mobile-hero-visual__device-frame">
            <div className="mobile-hero-visual__topbar">
              <span />
              <span />
              <span />
            </div>

            <div className="mobile-hero-visual__canvas">
              <div className="mobile-hero-visual__sidebar">
                <span />
                <span />
                <span />
              </div>

              <div className="mobile-hero-visual__workspace">
                <div className="mobile-hero-visual__hero-panel">
                  <div className="mobile-hero-visual__hero-lines">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mobile-hero-visual__pulse" />
                </div>

                <div className="mobile-hero-visual__grid">
                  <div />
                  <div />
                  <div />
                  <div />
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-hero-visual__base" />
          <div className="mobile-hero-visual__shadow" />
        </div>

        <div className="mobile-hero-visual__float-card mobile-hero-visual__float-card--right">
          <span className="mobile-hero-visual__chip">Fast Build</span>
          <div className="mobile-hero-visual__stack">
            <span />
            <span />
            <span />
          </div>
          <div className="mobile-hero-visual__caption">Responsive by default</div>
        </div>
      </div>
    </div>
  );
}
