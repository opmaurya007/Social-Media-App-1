import React from "react";

const form = () => {
  return (
    <>
      <div className="contact1">
        <div className="contact-r">
          <div className="contact-c">
            <h1>Contact Us</h1>
          </div>
          <p>
            Lorem Ipsum has been the industry dummy text of the printing and
            typesetting industry dummy text of the printing and typesetting
            industry.
          </p>
          <form action="">
            <div className="form-1">
              <label htmlFor="">Name</label>
              <br />
              <input type="email" name="" id="" placeholder="email" />
              <label htmlFor="">Email</label>
              <br />
              <input type="Number" name="" id="" placeholder="Mobile Number" />
              <label htmlFor="">Mobile Number</label>
              <br />
              <input type="textarea" name="" id="" placeholder="message" />
              <label htmlFor="">Message</label>
              <br />
              <input type="text" name="" id="" placeholder="Name" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default form;
