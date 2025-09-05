import React from "react";
import { socialImgs } from "../Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((img) => (
            <a className="icon" target="_blank" href={img.url} key={img.url}>
              <img class="rounded-full w-6 h-6 m-1" src={img.imgPath} />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            ©️{new Date().getFullYear()} Adeleke Elijah Oluwasegun. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
