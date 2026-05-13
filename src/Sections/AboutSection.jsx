import React from "react";
import { BrainCircuit, Layers3, Rocket, Sparkles } from "lucide-react";
import { aboutHighlights } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

const aboutStats = [
  { value: "20+", label: "projects built" },
  { value: "3+", label: "full-stack apps" },
  { value: "90%", label: "deployed work" },
];

const iconMap = {
  product: Layers3,
  learning: BrainCircuit,
  polish: Sparkles,
  shipping: Rocket,
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="section-heading">
          <div className="hero-badge section-badge">
            <p>About me</p>
          </div>
          <h2 className="section-title">
            I build with curiosity, structure, and a strong sense for how people
            actually use products.
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 xl:grid-cols-[1.08fr_0.92fr] xl:gap-8">
          <RevealOnScroll>
            <article className="surface-card h-full rounded-[1.75rem] p-6 md:p-8">
              <div className="flex h-full flex-col justify-between gap-8">
                <div className="space-y-6">
                  <p className="text-lg leading-8 text-slate-200 md:text-xl md:leading-9">
                    I&apos;m Elijah, a frontend-focused developer who enjoys
                    turning ambitious ideas into clean, responsive, and useful
                    digital products. My work sits between design sensitivity
                    and engineering discipline. I care about how an interface
                    looks, how fast it feels, and how clearly it helps someone
                    complete a task.
                  </p>
                  <p className="leading-8 text-slate-300 md:text-lg">
                    The projects I&apos;ve built reflect the kind of person I am
                    curious enough to explore AI workspaces, practical enough to
                    build SaaS dashboards and e-commerce flows, and thoughtful
                    enough to shape travel and restaurant experiences around
                    real user journeys. I like systems that are polished on the
                    surface and organized underneath.
                  </p>
                  <p className="leading-8 text-slate-300 md:text-lg">
                    I bring steady communication, patience in debugging, and a
                    high standard for detail. Whether I&apos;m building with
                    React, Next.js, Tailwind, backend services, payments, CMS
                    tools, or 3D interactions, my goal stays the same: create
                    work that feels reliable, modern, and easy to trust.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {aboutStats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="rounded-[1.25rem] border border-white/8 bg-white/[0.035] p-4"
                    >
                      <strong className="block text-2xl font-semibold text-white md:text-3xl">
                        {value}
                      </strong>
                      <span className="mt-1 block text-sm font-medium uppercase tracking-[0.16em] text-slate-400">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </RevealOnScroll>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
            {aboutHighlights.map(({ icon, title, desc }) => {
              const Icon = iconMap[icon];

              return (
                <RevealOnScroll key={title}>
                  <article className="surface-card flex h-full gap-4 rounded-[1.5rem] p-5 md:p-6">
                    <div className="flex size-12 flex-none items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-sky-200">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white md:text-xl">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300 md:text-base">
                        {desc}
                      </p>
                    </div>
                  </article>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
