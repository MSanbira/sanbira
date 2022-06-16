import React from "react";
import artSrc from "./assets/Art.svg";
import twitterSrc from "./assets/twitter.svg";
import linkedinSrc from "./assets/linkedin.svg";
import githubSrc from "./assets/github.svg";
import facebookSrc from "./assets/facebook.svg";

export const AppPlaceholder = () => {
  return (
    <div className="app-placeholder-container">
      <div className="bg-img-and-content">
        <h2>Matan Sanbira | Senior Front-end Dev</h2>

        <img src={artSrc} alt="background portrait" />
        <div className="content-section">
          <h1>
            <span className="line">
              <span className="bold">My work</span> keeps me slightly{" "}
              <span className="bold">tied up,</span>
            </span>
            <br />
            <span className="line">so my socials will have to do</span>
          </h1>
          <div className="socials-section">
            <a
              href="https://twitter.com/StudioSanbira"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitterSrc} alt="twitter" />
            </a>
            <a
              href="https://www.linkedin.com/in/matan-sanbira-695461109"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinSrc} alt="linkedin" />
            </a>
            <a
              href="https://github.com/MSanbira"
              target="_blank"
              rel="noreferrer"
            >
              <img src={githubSrc} alt="github" />
            </a>
            <a
              href="https://www.facebook.com/matan.nahoom"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebookSrc} alt="facebook" />
            </a>
          </div>
        </div>
      </div>

      <h3 className="credit">
        Designed with 💜 by{" "}
        <a href="http://alona.design" target="_blank" rel="noreferrer">
          Alona Sanbira
        </a>
      </h3>
    </div>
  );
};
