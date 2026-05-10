import React, { useCallback, useState } from "react";

const projectTabs = [
  {
    label: "Threadline",
    image: "/images/aiworkspace.png",
  },
  {
    label: "Metricly",
    image: "/images/metric.png",
  },
  {
    label: "NexBuy",
    image: "/images/nexBuy.png",
  },
  {
    label: "Savage",
    image: "/images/fullsavege.png",
  },
];

const codeLines = [
  "const product = projects.active;",
  "return <Workspace>",
  "  <Preview data={product} />",
  "  <ResponsiveFrame />",
  "</Workspace>;",
];

export default function MobileHeroVisual() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handlePointerMove = useCallback((event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({
      x: Number((x * 12).toFixed(2)),
      y: Number((y * -10).toFixed(2)),
    });
  }, []);

  const resetTilt = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="mobile-hero-visual"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      style={{
        "--hero-tilt-x": `${tilt.x}deg`,
        "--hero-tilt-y": `${tilt.y}deg`,
      }}
    >
      <div className="mobile-hero-visual__glow" />
      <div className="mobile-hero-visual__ambient" />

      <div className="mobile-hero-visual__stage">
        <div className="mobile-hero-visual__browser">
          <div className="mobile-hero-visual__reflection" />

          <div className="mobile-hero-visual__chrome">
            <div className="mobile-hero-visual__window-controls">
              <span />
              <span />
              <span />
            </div>

            <div className="mobile-hero-visual__tabs">
              {projectTabs.map((tab, index) => (
                <span
                  className="mobile-hero-visual__tab"
                  style={{ "--tab-index": index }}
                  key={tab.label}
                >
                  {tab.label}
                </span>
              ))}
            </div>

            <div className="mobile-hero-visual__url">
              <span />
              localhost:5173
            </div>
          </div>

          <div className="mobile-hero-visual__workspace">
            <aside className="mobile-hero-visual__activity">
              <span />
              <span />
              <span />
              <span />
            </aside>

            <section className="mobile-hero-visual__editor">
              <div className="mobile-hero-visual__editor-bar">
                <span>Hero.jsx</span>
                <span>Preview</span>
              </div>

              <div className="mobile-hero-visual__split">
                <div className="mobile-hero-visual__code">
                  {codeLines.map((line, index) => (
                    <div className="mobile-hero-visual__code-row" key={line}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <code>{line}</code>
                    </div>
                  ))}
                  <span className="mobile-hero-visual__typing-caret" />
                </div>

                <div className="mobile-hero-visual__preview">
                  <div className="mobile-hero-visual__preview-tabs">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="mobile-hero-visual__screens">
                    {projectTabs.map((tab, index) => (
                      <img
                        src={tab.image}
                        alt=""
                        className="mobile-hero-visual__screen"
                        style={{ "--screen-index": index }}
                        key={tab.label}
                        loading="eager"
                      />
                    ))}
                  </div>

                  <div className="mobile-hero-visual__device-toggle">
                    <span>1440</span>
                    <span>768</span>
                    <span>390</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="mobile-hero-visual__cursor" />
          <div className="mobile-hero-visual__resize-handle" />
          <div className="mobile-hero-visual__shadow" />
        </div>
      </div>
    </div>
  );
}
