import React from "react";
import "./vendor.css";

const vendor = () => {
  return (
    <>
      <div className="vendor">
        <div className="vendor-r">
          <h1>Download Vendor App</h1>
          <div className="para-vendor">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>
          <div className="vendor-img">
            <img src="./images/playstore.png" alt="" srcset="" width={180} />
            <img src="./images/appstore.png" alt="" srcset="" width={180} />
          </div>
        </div>

        <div className="image-container">
          <img src="./images/vendor.png" alt="Your Image" width={500} />
        </div>
      </div>
    </>
  );
};

export default vendor;
