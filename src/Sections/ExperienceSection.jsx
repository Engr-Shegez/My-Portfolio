import React from "react";
import { Code2, ExternalLink } from "lucide-react";
import TitleHeader from "../components/TitleHeader";
import { expCards } from "../Constants";
import GlowCard from "../components/GlowCard";
import RevealOnScroll from "../components/RevealOnScroll";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="w-full section-padding xl:px-0"
    >
      <div className="w-full h-full px-5 md:px-20">
        <RevealOnScroll>
          <TitleHeader title="My Journey" sub="👐 My Career Overview" />
        </RevealOnScroll>

        <div className="relative mt-16 md:mt-24">
          <div className="relative z-10 space-y-12 xl:space-y-20">
            {expCards.map((card) => (
              <div key={card.title} className="exp-card-wrapper">
                <RevealOnScroll className="xl:w-2/6">
                  <GlowCard card={card}>
                    {card.imgPath ? (
                      <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-white/[0.03]">
                        <img src={card.imgPath} alt={card.title} className="w-full object-cover" />
                      </div>
                    ) : null}
                  </GlowCard>
                </RevealOnScroll>

                <RevealOnScroll className="xl:w-4/6" y={18}>
                  <div className="experience-panel">
                    <div className="timeline-wrapper" aria-hidden="true">
                      <div className="timeline" />
                      <div className="gradient-line w-px h-full" />
                    </div>

                    <div className="expText flex gap-4 sm:gap-6 md:gap-8">
                      <div className="timeline-logo">
                        <img src={card.logoPath} alt="" aria-hidden="true" />
                      </div>
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-200/75">
                            {card.date}
                          </p>
                          <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                            {card.title}
                          </h3>
                        </div>

                        <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                          Responsibilities
                        </p>

                        <ul className="space-y-3 text-sm leading-7 text-slate-300 md:text-base">
                          {card.responsibilities.map((responsibility) => (
                            <li key={responsibility} className="experience-bullet">
                              {responsibility}
                            </li>
                          ))}
                        </ul>

                        {card.actions?.length ? (
                          <div className="experience-actions" aria-label={`${card.title} links`}>
                            {card.actions.map((action) => {
                              const Icon = action.variant === "primary" ? ExternalLink : Code2;

                              return (
                                <a
                                  key={action.label}
                                  href={action.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`experience-action ${
                                    action.variant === "primary"
                                      ? "experience-action--primary"
                                      : ""
                                  }`}
                                >
                                  <Icon size={16} strokeWidth={2.2} aria-hidden="true" />
                                  <span>{action.label}</span>
                                </a>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
