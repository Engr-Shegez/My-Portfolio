import React, { useState } from "react";
import Snowfall from "react-snowfall";
import Hero from "./Sections/Hero";
import ShowcaseSection from "./Sections/ShowcaseSection";
import Navbar from "./components/Navbar";
import LogoSection from "./Sections/LogoSection";
import FeatureCards from "./Sections/FeatureCards";
import ExperienceSection from "./Sections/ExperienceSection";
import TechStack from "./Sections/TechStack";
import Testimonials from "./Sections/Testimonials";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

export default function App() {
  const [snowOn, setSnowOn] = useState(true);

  return (
    <>
      {snowOn && (
        <Snowfall
          snowflakeCount={160}
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
      )}

      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Toggle for demo purposes; remove if you don't need it */}
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
