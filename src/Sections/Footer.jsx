import React from "react";
import { socialImgs } from "../Constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="socials">
          {socialImgs.map((img) => (
            <a
              className="icon"
              target="_blank"
              rel="noreferrer"
              href={img.url}
              key={img.url}
            >
              <img
                className="m-1 h-5 w-5 rounded-full md:h-6 md:w-6"
                src={img.imgPath}
                alt={img.name}
              />
            </a>
          ))}
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Adeleke Elijah Oluwasegun. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
