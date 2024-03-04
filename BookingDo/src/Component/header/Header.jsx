import React from "react";
import "./header.css";

const header = () => {
  return (
    <>
      <div className="head1">
        <div className="start">
          <img src="./images/logo.png" alt="" width={20} />
          <h3>
            envato<span>market</span>
          </h3>
        </div>
        <div className="end">
          <button>Buy now</button>
        </div>
      </div>
    </>
  );
};

export default header;
