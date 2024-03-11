import React from "react";
import "./main.css";

const Hero = () => {
  return (
    <>
      <div className="app-container">
        <div className="content-container">
          <h1>Smart booking tool to grow your online business</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry dummy text of the
            printing and typesetting industry dummy text of the printing and
            typesetting industry.
          </p>
          <button>Get Started</button>
        </div>
        <div className="image-container">
          <img src="./images/main.png" alt="Your Image" />
        </div>
      </div>
    </>
  );
};

export default Hero;
