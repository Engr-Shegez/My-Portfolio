import React from "react";
import {
  ClipboardCheck,
  Code2,
  MessageCircle,
  Rocket,
  Search,
} from "lucide-react";
import { processSection, processSteps } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

const iconMap = {
  discovery: Search,
  strategy: ClipboardCheck,
  development: Code2,
  launch: Rocket,
};

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="section-heading">
          <div className="hero-badge section-badge">
            <p>{processSection.label}</p>
          </div>
          <h2 className="section-title">
            {processSection.headline.before}{" "}
            <em className="font-serif italic text-cyan-200">
              {processSection.headline.accent}
            </em>
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            {processSection.subheadline}
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <RevealOnScroll>
            <aside className="sticky top-28 hidden xl:block">
              <div className="space-y-6">
                <div className="inline-flex size-14 items-center justify-center rounded-full border border-cyan-200/20 bg-cyan-200/10 text-cyan-100">
                  <MessageCircle size={24} strokeWidth={1.8} aria-hidden="true" />
                </div>
                <div className="space-y-4">
                  <h3 className="max-w-sm text-3xl font-semibold tracking-tight text-white">
                    No mystery, no messy handoff, no silent weeks.
                  </h3>
                  <p className="max-w-md text-base leading-8 text-slate-300">
                    Each phase has a purpose, a clear client action, and a
                    visible outcome, so you always know what is happening and
                    what comes next.
                  </p>
                </div>
              </div>
            </aside>
          </RevealOnScroll>

          <div className="relative">
            <div
              className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-cyan-200/0 via-cyan-200/30 to-cyan-200/0 md:block"
              aria-hidden="true"
            />

            <div className="space-y-5">
              {processSteps.map((step) => {
                const Icon = iconMap[step.icon] ?? ClipboardCheck;

                return (
                  <RevealOnScroll key={step.number}>
                    <article className="surface-card relative rounded-[1.5rem] p-6 md:ml-16 md:p-7">
                      <div className="absolute -left-[4.95rem] top-7 hidden size-10 items-center justify-center rounded-full border border-cyan-200/24 bg-[#0c1e35] text-cyan-100 shadow-[0_12px_30px_rgba(0,0,0,0.24)] md:flex">
                        <Icon size={18} strokeWidth={1.9} aria-hidden="true" />
                      </div>

                      <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                        <div className="flex items-center gap-3 sm:w-36 sm:flex-none sm:flex-col sm:items-start">
                          <span className="inline-flex size-11 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-cyan-100 md:hidden">
                            <Icon size={20} strokeWidth={1.9} aria-hidden="true" />
                          </span>
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100/80">
                            {step.number}
                          </span>
                        </div>

                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                            {step.title}
                          </h3>
                          <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </RevealOnScroll>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
