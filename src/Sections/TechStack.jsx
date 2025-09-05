import React from "react";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons, techStackImgs } from "../Constants";
import TechIcon from "../components/Models/TechLogos/TechIcon";

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Tech Stack Expertise" sub="My Skills" />

        <div className="tech-grid">
          {techStackImgs.map((icon) => (
            <div
              key={icon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div />
              <div className="tech-card-content ">
                <div className="tech-icon-wrapper flex flex-col items-center text-center">
                  <img src={icon.imgPath} />
                  <div className="padding-x w-40 lg:w-40">
                    <p>{icon.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
