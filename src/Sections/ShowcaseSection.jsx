import React from "react";
import RevealOnScroll from "../components/RevealOnScroll";

const projectActions = [
  {
    label: "View Code",
    icon: "/images/github.png",
    className: "size-5",
  },
  {
    label: "Live Demo",
    icon: "/images/concepts.svg",
    className: "size-[1.125rem]",
  },
];

export default function ShowcaseSection() {
  return (
    <section id="work" className="app-showcase">
      <div className="w-full">
        <RevealOnScroll className="mb-10 max-w-2xl md:mb-14">
          <div className="hero-badge">
            <p className="font-semibold text-sky-100  ">My works</p>
          </div>
          <h2 className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-sky-200 md:text-5xl md:leading-[1.02]">
            Product work shaped around clarity, responsiveness, and real-world
            usability.
          </h2>
        </RevealOnScroll>

        <div className="showcaselayout">
          <RevealOnScroll className="first-project-wrapper">
            <article className="surface-card  rounded-[2rem] p-4 md:p-6">
              <div className="image-wrapper">
                <img src="/images/aiworkspace.png" alt="Thredline workspace" />
              </div>
              <div className="text-content">
                <h2>Threadline, the AI-powered workspace</h2>
                <p className="text-slate-300 md:text-lg">
                  A modern AI workspace designed to centralize conversations,
                  context, and task flow into one responsive interface. The
                  product balances clear information hierarchy with a scalable
                  frontend system built for speed and day-to-day usability.
                </p>
                <div className="action-row">
                  <a
                    href="https://github.com/Engr-Shegez/Ai-workspace.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-chip"
                  >
                    <img
                      src={projectActions[0].icon}
                      alt=""
                      aria-hidden="true"
                      className={projectActions[0].className}
                    />
                    <span>{projectActions[0].label}</span>
                  </a>
                  <a
                    href="https://ai-workspace-theta.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-chip action-chip--primary"
                  >
                    <img
                      src={projectActions[1].icon}
                      alt=""
                      aria-hidden="true"
                      className={projectActions[1].className}
                    />
                    <span>{projectActions[1].label}</span>
                  </a>
                </div>
              </div>
            </article>
            <RevealOnScroll className="project">
              <article className="surface-card mt-6 rounded-[1.75rem] p-4 md:p-5">
                <div className="image-wrapper bg-white/[0.03]">
                  <img
                    src="/images/metric.png"
                    alt="Nova Store ecommerce app"
                  />
                </div>
                <div className="space-y-5 px-1 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    Team Productivity SaaS Platform
                  </h3>
                  <p className="text-slate-300 md:text-lg">
                    A responsive SaaS tool that helps teams organize tasks,
                    monitor progress, and make faster decisions with intuitive
                    data visualization and workflow management features.
                  </p>
                  <div className="action-row">
                    <a
                      href="https://github.com/Engr-Shegez/metricly.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip"
                    >
                      <img
                        src={projectActions[0].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[0].className}
                      />
                      <span>{projectActions[0].label}</span>
                    </a>
                    <a
                      href="https://metricly-wzql.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip action-chip--primary"
                    >
                      <img
                        src={projectActions[1].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[1].className}
                      />
                      <span>{projectActions[1].label}</span>
                    </a>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          </RevealOnScroll>

          <div className="project-list-wrapper">
            <RevealOnScroll className="project">
              <article className="surface-card rounded-[1.75rem] p-4 md:p-5">
                <div className="image-wrapper bg-white/[0.03]">
                  <img
                    src="/images/download.png"
                    alt="Travel agency React dashboard"
                  />
                </div>
                <div className="space-y-5 px-1 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    TripNest
                  </h3>
                  <p className="text-slate-300 md:text-lg">
                    TripNest is a full-stack travel agency web app built with
                    React Router, Appwrite, Gemini AI, Stripe, and Sentry. Users
                    can generate custom travel itineraries, explore curated
                    destinations, view trip details, and manage travel plans
                    through an admin dashboard with real-time stats and user
                    data.
                  </p>
                  <div className="action-row">
                    <a
                      href="https://github.com/Engr-Shegez/E-commerce.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip"
                    >
                      <img
                        src={projectActions[0].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[0].className}
                      />
                      <span>{projectActions[0].label}</span>
                    </a>
                    <a
                      href="https://e-commerce-csa8.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip action-chip--primary"
                    >
                      <img
                        src={projectActions[1].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[1].className}
                      />
                      <span>{projectActions[1].label}</span>
                    </a>
                  </div>
                </div>
              </article>
            </RevealOnScroll>

            <RevealOnScroll className="project">
              <article className="surface-card rounded-[1.75rem] p-4 md:p-5">
                <div className="image-wrapper bg-white/[0.03]">
                  <img
                    src="/images/nexBuy.png"
                    alt="Nova Store ecommerce app"
                  />
                </div>
                <div className="space-y-5 px-1 pt-5">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    NexBuy E-commerce Platform with Stripe payments
                  </h3>
                  <p className="text-slate-300 md:text-lg">
                    A responsive e-commerce platform designed for smooth product
                    discovery, cart management, and checkout preparation,
                    powered by Next.js, Sanity CMS, and modern React tooling.
                  </p>
                  <div className="action-row">
                    <a
                      href="https://github.com/Engr-Shegez/Nova-store.git"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip"
                    >
                      <img
                        src={projectActions[0].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[0].className}
                      />
                      <span>{projectActions[0].label}</span>
                    </a>
                    <a
                      href="https://novagadget-store.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-chip action-chip--primary"
                    >
                      <img
                        src={projectActions[1].icon}
                        alt=""
                        aria-hidden="true"
                        className={projectActions[1].className}
                      />
                      <span>{projectActions[1].label}</span>
                    </a>
                  </div>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
