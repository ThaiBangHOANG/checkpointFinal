import React from "react";
import about from "../img/about.jpeg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          My name's <span>Thai Bang HOANG</span>
        </h4>
        <p className="about-text">
          After finishing my Doctorat in 2019, I have decided to continue
          following my dream to become a developer and researcher in Web
          development. You can find some pieces of information about me here!
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Status</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Personality</p>
            <p>Working Attitude</p>
          </div>
          <div className="right-section">
            <p>: Thai Bang HOANG</p>
            <p>: 37 years old</p>
            <p>: Married</p>
            <p>: Vietnamese</p>
            <p>: French, English, Vietnam</p>
            <p>: Sens of humour, cheerful</p>
            <p>: Teamwork, Autonomy</p>
          </div>
        </div>
        <button className="btn">
          <a
            href="https://thaibanghoang.rocks/"
            target="_blank"
            rel="noreferrer"
          >
            Download my CV
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
