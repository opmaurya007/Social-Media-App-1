import React from "react";
import "./Review.css";

const review = () => {
  return (
    <>
      <div className="review-container">
        <div className="review-image">
          <img src="./images/client.png" alt="Your Image" />
        </div>
        <div className="review-headpage">
          <h1>What our client says?</h1>
          <div className="review-para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
          </div>

          <div className="review-c">
            <div className="review-star">
              <img src="images/5star.png" alt="star" width={150} />
            </div>
            <p>
              " Lorem Ipsum has been the industry dummy text of the printing and
              typesetting industry dummy text of the printing and typesetting
              industry. "
            </p>
            <div className="profile">
              <div className="profile-img">
                <img src="./images/nimg.jpg" alt="Your Image" width={70} />
              </div>
              <div className="profile-s">
                <p>opmaurya</p>
                <p>software developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default review;
