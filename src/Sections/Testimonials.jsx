import React from "react";
import TitleHeader from "../components/TitleHeader";
import { testimonials } from "../Constants";
import GlowCard from "../components/GlowCard";
import RevealOnScroll from "../components/RevealOnScroll";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full px-5 md:px-10">
        <RevealOnScroll>
          <TitleHeader
            title="What People Say About me"
            sub="Collegue's Feedback Highlights"
          />
        </RevealOnScroll>

        <div className="mt-12 columns-1 gap-5 md:mt-16 md:columns-2 lg:columns-3">
          {testimonials.map(({ imgPath, name, mentions, review }) => (
            <RevealOnScroll key={name} className="mb-5" y={14}>
              <GlowCard card={{ review }}>
                <div className="flex items-center gap-3">
                  <div className="overflow-hidden rounded-full border border-white/10 bg-white/[0.04]">
                    <img
                      src={imgPath}
                      alt={name}
                      className="size-14 object-cover md:size-16"
                    />
                  </div>
                  <div>
                    <p className="font-semibold tracking-tight text-white">
                      {name}
                    </p>
                    <p className="text-sm leading-6 text-slate-400">
                      {mentions}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
