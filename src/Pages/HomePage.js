import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StyleHome from "../Components/StyleHome";

function HomePage() {
  return (
    <StyleHome>
      <div className="HomePage">
        <header>
          <h1 className="text-title">
            <div>
              Welcome to my website
              <div id="appear">
                <div>
                  <div> My name&apos;s Hoang Thai Bang</div>
                </div>
                <div>
                  <div>I am a developer</div>
                </div>
                <div>
                  <div>I am a researcher</div>
                </div>
              </div>
              Very nice to meet you!
            </div>
          </h1>
          <div className="icons">
            <a
              href="https://github.com/ThaiBangHOANG"
              target="_blank"
              rel="noreferrer"
              className="icon-holder"
            >
              <FontAwesomeIcon icon={faGithub} className="icon gh" />
            </a>
            <a
              href="https://www.linkedin.com/in/thaibanghoang"
              target="_blank"
              rel="noreferrer"
              className="icon-holder"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon lk" />
            </a>
          </div>
        </header>
      </div>
    </StyleHome>
  );
}

export default HomePage;
