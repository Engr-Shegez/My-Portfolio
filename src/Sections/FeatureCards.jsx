import React from "react";
import { abilities } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

export default function FeatureCards() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="section-heading">
          <div className="hero-badge section-badge">
            <p>WHY WORK WITH ME</p>
          </div>
          <h2 className="section-title">
            I Build Solutions, Not Just Websites.
          </h2>
        </RevealOnScroll>
        <div className="w-full mt-12  padding-x-lg">
          <div className="mx-auto grid-3-cols">
            {abilities.map(({ imgPath, title, desc }) => (
              <RevealOnScroll key={title}>
                <div className="surface-card flex h-full flex-col gap-4 rounded-[1.5rem] p-6 md:p-8">
                  <div className="flex size-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] md:size-14">
                    <img
                      src={imgPath}
                      alt={title}
                      className="size-6 md:size-7"
                    />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    {title}
                  </h3>
                  <p className="text-sm leading-7 text-slate-300 md:text-base">
                    {desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
