import React from "react";
import linkedinLogo from "../../../assets/linkedin.png";
import githubLogo from "../../../assets/github.png";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="border-top">
          <p>&copy; 2022 Shay Gali All rights reserved.</p>
        </div>
        <div style={{ margin: "5px" }}>
          <a
            href="https://linkedin.com/in/shay-gali"
            target="_blank"
            aria-label="Linkedin"
            rel="noreferrer"
            style={{ margin: "5px" }}
          >
            <img src={linkedinLogo} alt="linkdin logo" />
          </a>
          <a
            href="https://github.com/ShayGali"
            target="_blank"
            aria-label="Github"
            rel="noreferrer"
            style={{ margin: "5px" }}
          >
            <img src={githubLogo} alt="github logo" />
          </a>
        </div>
      </footer>
    </>
  );
}
