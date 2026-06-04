import React from "react";
import {
  ArrowRight,
  Check,
  Code2,
  LayoutDashboard,
  MonitorSmartphone,
  Palette,
  PanelsTopLeft,
  Sparkles,
  UserRound,
  Wrench,
} from "lucide-react";
import { serviceCards, servicesSection } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

const iconMap = {
  website: MonitorSmartphone,
  landing: PanelsTopLeft,
  maintenance: Wrench,
  dashboard: LayoutDashboard,
  portfolio: UserRound,
  design: Palette,
};

export default function ServicesPricing() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <RevealOnScroll className="section-heading">
          <div className="hero-badge section-badge">
            <p>{servicesSection.label}</p>
          </div>
          <h2 className="section-title">
            {servicesSection.headline.before}{" "}
            <em className="font-serif italic text-cyan-200">
              {servicesSection.headline.accent}
            </em>
          </h2>
          <p className="max-w-3xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">
            {servicesSection.value}
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;

            return (
              <RevealOnScroll
                key={service.title}
                className={service.featured ? "lg:col-span-2 xl:col-span-1" : ""}
              >
                <article
                  className={`surface-card flex h-full flex-col rounded-[1.5rem] p-6 md:p-7 ${
                    service.featured
                      ? "border-cyan-200/30 bg-white/[0.055]"
                      : ""
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex size-12 flex-none items-center justify-center rounded-full border ${
                        service.featured
                          ? "border-cyan-200/30 bg-cyan-200/12 text-cyan-100"
                          : "border-white/8 bg-white/[0.04] text-slate-200"
                      }`}
                    >
                      <Icon size={22} strokeWidth={1.9} aria-hidden="true" />
                    </div>

                    {service.featured ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-200/20 bg-cyan-200/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-cyan-100">
                        <Sparkles size={13} strokeWidth={2} aria-hidden="true" />
                        Main
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-6 flex flex-1 flex-col">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300 md:text-base">
                        {service.tagline}
                      </p>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4 border-y border-white/8 py-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Starts at
                        </p>
                        <strong className="mt-2 block text-xl font-semibold text-white md:text-2xl">
                          {service.price}
                        </strong>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                          Timeline
                        </p>
                        <strong className="mt-2 block text-xl font-semibold text-white md:text-2xl">
                          {service.timeline}
                        </strong>
                      </div>
                    </div>

                    <div className="mt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                        Best for
                      </p>
                      <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                        {service.bestFor.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="mt-2 size-1.5 flex-none rounded-full bg-cyan-200/80" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100/80">
                        Includes
                      </p>
                      <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-300">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable} className="flex gap-3">
                            <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-emerald-300/12 text-emerald-200">
                              <Check size={13} strokeWidth={2.4} aria-hidden="true" />
                            </span>
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href="#contact"
                      className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 ${
                        service.featured
                          ? "bg-white text-slate-950 hover:bg-cyan-100"
                          : "border border-white/10 text-slate-100 hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      Start this project
                      <ArrowRight size={16} strokeWidth={2.2} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
