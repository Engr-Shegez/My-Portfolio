import React from "react";
import { counterItems } from "../Constants/index.js";
import CountUp from "react-countup";
import RevealOnScroll from "./RevealOnScroll";

export default function AnimatedCounter() {
  return (
    <div id="counter" className="padding-x-lg mt-14 md:mt-20">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item) => (
          <RevealOnScroll key={item.label}>
            <div className="surface-card flex h-full flex-col justify-center rounded-[1.5rem] p-6 md:p-8">
              <div className="mb-2 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                <CountUp suffix={item.suffix} end={item.value} />
              </div>
              <div className="text-sm leading-6 text-slate-300 md:text-base">
                {item.label}
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
