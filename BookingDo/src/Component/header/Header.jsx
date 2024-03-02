import React from "react";
import "./header.css";

const header = () => {
  return (
    <>
      <div className="head">
        <div className="start">
          <span>
            <img src="./images/logo.png" alt="" width={20} height={20} />
          </span>
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
