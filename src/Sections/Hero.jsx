import React, { Suspense, lazy, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Typewriter from "../components/Typewriter";
import { words } from "../Constants";
import Button from "../components/Button";
import AnimatedCounter from "../components/AnimatedCounter";
import RevealOnScroll from "../components/RevealOnScroll";
import MobileHeroVisual from "../components/HeroModules/MobileHeroVisual";

const HeroExperience = lazy(
  () => import("../components/HeroModules/HeroExperience"),
);

export default function Hero() {
  const [showExperience, setShowExperience] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const MotionSpan = motion.span;

  useEffect(() => {
    const viewportQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateSceneVisibility = () => {
      setShowExperience(viewportQuery.matches && !reducedMotionQuery.matches);
    };

    updateSceneVisibility();
    viewportQuery.addEventListener("change", updateSceneVisibility);
    reducedMotionQuery.addEventListener("change", updateSceneVisibility);

    return () => {
      viewportQuery.removeEventListener("change", updateSceneVisibility);
      reducedMotionQuery.removeEventListener("change", updateSceneVisibility);
    };
  }, []);

  useEffect(() => {
    if (words.length <= 1) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveWordIndex((currentIndex) => (currentIndex + 1) % words.length);
    }, 1400);

    return () => window.clearInterval(intervalId);
  }, []);

  const activeWord = words[activeWordIndex];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* <div aria-hidden="true" className="hero-accent" /> */}

      <div className="hero-layout">
        <header className="hero-copy">
          <RevealOnScroll
            className="flex max-w-2xl flex-col gap-6 md:gap-8"
            y={18}
          >
            {/* <div className="hero-badge">
              <p>Frontend engineer crafting clean, scalable product interfaces</p>
            </div> */}

            <div className="hero-text">
              <h1>
                Building
                <span className="slide">
                  <AnimatePresence mode="wait">
                    <MotionSpan
                      key={activeWord.text}
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { opacity: 0, y: 10 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { opacity: 0, y: -10 }
                      }
                      transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
                      className="wrapper"
                    >
                      <span className="flex items-center ">
                        <img
                          src={activeWord.imgPath}
                          alt={activeWord.text}
                          className="rounded-full bg-white/90 p-1.5 md:size-9 md:p-2"
                        />
                        <span>{activeWord.text}</span>
                      </span>
                    </MotionSpan>
                  </AnimatePresence>
                </span>
              </h1>
              <h1>
                where clarity, performance, and visual polish work together from
                the first interaction.
              </h1>
            </div>

            <p className="hero-subtext">
              <Typewriter
                text={
                  "Hi, I'm Elijah, a frontend developer focused on thoughtful product UI."
                }
                speed={70}
              />
            </p>

            <Button
              className="h-12 -mt-2 w-full sm:h-[3.25rem] sm:w-[17rem]"
              id="button"
              text="Explore My Craft"
            />
          </RevealOnScroll>
        </header>

        <figure className="hero-visual-shell">
          <div className="hero-3d-layout">
            {showExperience ? (
              <Suspense fallback={<MobileHeroVisual />}>
                <HeroExperience />
              </Suspense>
            ) : (
              <MobileHeroVisual />
            )}
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
}
