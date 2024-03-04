import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="navbar-img">
          <img src="./images/logoB.png" alt="" width={220} />
        </div>
        <div className="navbar-c">
          <a href="#home">Home</a>
          <a href="#feature">Features</a>
          <a href="#store">Our Stores</a>
          <a href="#price">Price Plans</a>
          <a href="#blog">Blogs</a>
          <a href="#contactUs">Contact Us</a>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
};

export default navbar;
