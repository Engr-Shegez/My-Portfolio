import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseSection() {
  const sectionRef = useRef(null);
  const binglebeamRef = useRef(null);
  const quizprojectRef = useRef(null);
  const project2Ref = useRef(null);

  useGSAP(() => {
    const projects = [
      binglebeamRef.current,
      project2Ref.current,
      quizprojectRef.current,
    ];

    projects.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* LEFT SIDE */}
          <div className="first-project-wrapper" ref={binglebeamRef}>
            <div className="imagewrapper">
              <img src="/images/binglebeam.png" alt="Bingle-Beam" />
            </div>
            <div className="text-content">
              <h2>
                BingleBeam: A Dynamic Streaming Platform for Curated Movie
                Discovery
              </h2>
              <p className="text-white-50 md:text-xl">
                BingleBeam is a responsive streaming app built with React,
                designed for personalized movie discovery and smooth user
                interaction. It features dynamic content, category browsing, and
                an engaging modern UI.
              </p>
              <div className="flex gap-5">
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 h-10 font-semibold flex justify-center gap-1">
                    <img
                      src="/images/github.png"
                      alt="image"
                      className="size-7"
                    />
                    <span>View Code</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 h-10 font-semibold flex justify-center gap-1">
                    <img
                      src="/images/concepts.svg"
                      alt="image"
                      className="size-5 pt-1 "
                    />
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project " ref={quizprojectRef}>
              <div className="imagewrapper bg-[#fffefdb] relative">
                <img src="/images/quiz-project.png" alt="React Quiz app" />
              </div>
              <h2 className="pl-2 pb-5">React quiz</h2>
              <div className="flex gap-5 pl-2">
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 h-10 font-semibold flex justify-center gap-1">
                    <img
                      src="/images/github.png"
                      alt="image"
                      className="size-7"
                    />
                    <span>View Code</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 h-10 font-semibold flex justify-center gap-1">
                    <img
                      src="/images/concepts.svg"
                      alt="image"
                      className="size-5 pt-1 "
                    />
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="project" ref={project2Ref}>
              <div className="imagewrapper bg-[#fffe7db]">
                <img
                  src="/images/e-commerce.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2 className="pl-2 pb-5">Library Management Platform</h2>
              <div className="flex gap-5 pl-2">
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 font-semibold flex justify-center gap-1 h-10">
                    <img
                      src="/images/github.png"
                      alt="image"
                      className="size-7"
                    />
                    <span>View Code</span>
                  </div>
                </a>
                <a href="#contact">
                  <div className="px-5 py-2 rounded-lg bg-white text-black-100 hover:bg-black-50 transition-colors duration-300 hover:text-white w-39 font-semibold flex justify-center gap-1 h-10">
                    <img
                      src="/images/concepts.svg"
                      alt="image"
                      className="size-5 pt-1 "
                    />
                    <span>Live Demo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
