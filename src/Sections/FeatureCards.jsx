import React from "react";
import { abilities } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

export default function FeatureCards() {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <RevealOnScroll key={title}>
            <div className="surface-card flex h-full flex-col gap-4 rounded-[1.5rem] p-6 md:p-8">
              <div className="flex size-12 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] md:size-14">
                <img src={imgPath} alt={title} className="size-6 md:size-7" />
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
  );
}
