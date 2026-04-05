import React, { Suspense, lazy, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";

const Snowfall = lazy(() => import("react-snowfall"));
const ShowcaseSection = lazy(() => import("./Sections/ShowcaseSection"));
const LogoSection = lazy(() => import("./Sections/LogoSection"));
const FeatureCards = lazy(() => import("./Sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./Sections/ExperienceSection"));
const TechStack = lazy(() => import("./Sections/TechStack"));
const Testimonials = lazy(() => import("./Sections/Testimonials"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));

export default function App() {
  const [snowOn, setSnowOn] = useState(false);

  useEffect(() => {
    const mediaQuery =
      typeof window !== "undefined"
        ? window.matchMedia("(min-width: 1280px)")
        : null;
    const reducedMotionQuery =
      typeof window !== "undefined"
        ? window.matchMedia("(prefers-reduced-motion: reduce)")
        : null;

    const updateSnowPreference = () => {
      const allowSnow =
        Boolean(mediaQuery?.matches) && !Boolean(reducedMotionQuery?.matches);
      setSnowOn(allowSnow);
    };

    updateSnowPreference();

    mediaQuery?.addEventListener("change", updateSnowPreference);
    reducedMotionQuery?.addEventListener("change", updateSnowPreference);

    return () => {
      mediaQuery?.removeEventListener("change", updateSnowPreference);
      reducedMotionQuery?.removeEventListener("change", updateSnowPreference);
    };
  }, []);

  return (
    <>
      {snowOn && (
        <Suspense fallback={null}>
          <Snowfall
            snowflakeCount={80}
            radius={[0.5, 2.5]}
            speed={[0.2, 0.6]}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              pointerEvents: "none",
              zIndex: 9999,
            }}
          />
        </Suspense>
      )}

      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </Suspense>

      <button
        onClick={() => setSnowOn((s) => !s)}
        style={{
          position: "fixed",
          right: 12,
          bottom: 12,
          zIndex: 10001,
          padding: "8px 12px",
          borderRadius: 6,
          background: "rgba(0,0,0,0.6)",
          color: "white",
          border: "none",
          cursor: "pointer",
          pointerEvents: "auto",
        }}
        aria-pressed={snowOn}
      >
        {snowOn ? "Hide Snow" : "Show Snow"}
      </button>
    </>
  );
}
