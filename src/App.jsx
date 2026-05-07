import React, { Suspense, lazy } from "react";
import BackgroundGrid from "./components/BackgroundGrid";
import Navbar from "./components/Navbar";
import Hero from "./Sections/Hero";

const ShowcaseSection = lazy(() => import("./Sections/ShowcaseSection"));
const AboutSection = lazy(() => import("./Sections/AboutSection"));
const LogoSection = lazy(() => import("./Sections/LogoSection"));
const FeatureCards = lazy(() => import("./Sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./Sections/ExperienceSection"));
const TechStack = lazy(() => import("./Sections/TechStack"));
const Testimonials = lazy(() => import("./Sections/Testimonials"));
const Contact = lazy(() => import("./Sections/Contact"));
const Footer = lazy(() => import("./Sections/Footer"));

export default function App() {
  return (
    <div className="app-shell">
      <BackgroundGrid />
      <div className="content-layer">
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <ShowcaseSection />
          <AboutSection />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          <Testimonials />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}
