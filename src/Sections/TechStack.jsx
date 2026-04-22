import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackImgs } from "../Constants";
import RevealOnScroll from "../components/RevealOnScroll";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <RevealOnScroll>
          <TitleHeader title="Tech Stack Expertise" sub="My Skills" />
        </RevealOnScroll>

        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <RevealOnScroll key={icon.name}>
              <div className="surface-card tech-card overflow-hidden rounded-[1.5rem]">
                <div className="tech-card-content">
                  <div className="tech-icon-wrapper flex flex-col items-center text-center">
                    <div className="flex size-[4.5rem] items-center justify-center rounded-full border border-white/8 bg-white/[0.04]">
                      <img src={icon.imgPath} alt={icon.name} className="size-9 object-contain" />
                    </div>
                    <div className="padding-x w-40 lg:w-40">
                      <p>{icon.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
