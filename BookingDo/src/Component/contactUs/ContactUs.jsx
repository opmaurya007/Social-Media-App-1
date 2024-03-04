import React from "react";
// import "./form.jsx";
import "./contact.css";
import ReCAPTCHA from "react-google-recaptcha";

const contactUs = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <h1>Any Query! Feel free to contact.</h1>
          <div className="para">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry dummy text of the
              printing and typesetting industry dummy text of the printing and
              typesetting industry.
            </p>
            <div className="cant">
              <h6>Email Us</h6>
              <a href="www.email.com">paponapp2244@gmail.com</a>{" "}
              <h6>Call Us</h6>
              <a href="tel:+919016996697">+919016996697</a>
              <hr />
              <span>Connect with us :</span>
            </div>
          </div>
        </div>
        {/* <---------------------------------> */}
        <div className="form">
          <div className="contact1">
            <div className="contact-r">
              <div className="contact-c">
                <h1>Contact Us</h1>

                <p>
                  Lorem Ipsum has been the industry dummy text of the printing
                  and typesetting industry dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <form action="">
                <div className="form-1">
                  <div className="form-2">
                    <div className="name">
                      <label htmlFor="">Name</label>
                      <br />
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="name"
                        width={80}
                      />
                    </div>

                    <div className="email-1">
                      {" "}
                      <label htmlFor="">Email</label>
                      <br />
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="email"
                        width={80}
                      />
                    </div>
                  </div>
                  <br />
                  <label htmlFor="">Mobile Number</label>
                  <br />{" "}
                  <input
                    type="Number"
                    name=""
                    id=""
                    placeholder="Mobile Number"
                  />
                  <br />
                  <label htmlFor="">Message</label>
                  <br />
                  <textarea
                    name=""
                    id=""
                    cols=""
                    rows="2"
                    placeholder="message"
                  ></textarea>{" "}
                  <div className="captcha">
                    <ReCAPTCHA
                      sitekey="YOUR_RECAPTCHA_SITE_KEY"
                      name="recaptcha"
                    />
                  </div>
                  <div className="cont-submit">
                    <button>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contactUs;
