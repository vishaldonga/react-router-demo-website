import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phoneno: "",
    message: ""
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setData((prevVal) => {
      return { ...prevVal, [name]: value };
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${data.fullname} Number: ${data.phoneno} Message: ${data.message}`
    );
  };
  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
      </div>
      <div className="text-center">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form
              action=""
              onSubmit={handleFormSubmit}
              className="flex flex-col align-item-center"
            >
              <div className="form-control-div">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={handleTextChange}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="form-control-div">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Phone No
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phoneno"
                  value={data.phoneno}
                  onChange={handleTextChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
              <div className="form-control-div">
                <label
                  htmlFor="exampleFormControlTextarea1"
                  className="form-label"
                >
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={handleTextChange}
                  rows="3"
                ></textarea>
              </div>
              <div>
                <button class="btn btn-submit" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
