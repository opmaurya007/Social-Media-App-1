import React from "react";
import "./footer.css";
import { text } from "@fortawesome/fontawesome-svg-core";

const footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-r">
            <img src="./images/logoB.png" alt="" />

            <div className="footer-c">
              <p>
                Lorem Ipsum has been the industry dummy text of the printing and
                typesetting industry dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>

          <div className="footer-r">
            <h4>PAGES</h4>
            <a href="./about">About Us</a>
            <a href="./privacy">Privacy Policy</a>
            <a href="./condition">term & Conditions</a>
            <a href="./refund">Refund Policy</a>
            <a href="./contact">Contact Us</a>
          </div>

          <div className="footer-r">
            <h4>OTHERS</h4>
            <a href="./blogs">Blogs</a>
            <a href="./faq">FAQs</a>
            <a href="./stores">Our Stores</a>
          </div>

          <div className="footer-r">
            <h4>HELP</h4>
            <a href="www.email.com">paponapp2244@gmail.com</a>
            <a href="tel:+919016996697 ">+919016996697 </a>
          </div>
        </div>
        <hr />
        <div className="footer-d">
          <div className="footer-l">
            <span>
              Copyright © 2023 Papon IT Solutions. All Rights Reserved
            </span>
          </div>
          <div className="social-icon-f">
            <a href="https://www.facebook.com/">
              <img src="./images/facebook.png" alt="" />
            </a>{" "}
            <a href="https://twitter.com/">
              <img src="./images/btw.png" alt="" />
            </a>{" "}
            <a href="https://www.instagram.com/">
              <img src="./images/binsta.png" alt="" />
            </a>{" "}
            <a href="https://www.linkedin.com/">
              <img src="./images/bin.png" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
