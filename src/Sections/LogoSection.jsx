import React from "react";
import { logoIconsList } from "../Constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={icon.name ?? "Company logo"} />
    </div>
  );
};

function LogoSection() {
  const loopedLogos = [...logoIconsList, ...logoIconsList];

  return (
    <div className="relative my-10 md:my-20">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-32 md:h-40">
        <div className="marquee-box gap-8 md:gap-12">
          {loopedLogos.map((icon, index) => (
            <LogoIcon key={`${icon.imgPath}-${index}`} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoSection;
