import React, { useState } from "react";
import Close from "../close.png";

const SubscribeButton = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");
  const [isActive, setActive] = useState(false);

  const mouseEnter = (e) => {
    e.target.innerText = "Sign up now!";
  };
  const mouseLeave = (e) => {
    e.target.innerText = "Sign Up";
  };
  const handleToggle = () => {
    setActive(!isActive);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("DateOfBirth: ", date);
    console.log("Address: ", address);
  };
  return (
    <div>
      <a
        href="/#"
        className="button"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onClick={handleToggle}
      >
        Sign Up
      </a>
      <div className={isActive ? "modal-overlay" : "closed"} id="modal-overlay">
        <div className={isActive ? "modal" : "closed"} id="modal">
          <div className="modal-guts">
            <button
              className="close-button"
              id="close-button"
              onClick={handleToggle}
            >
              <img src={Close} alt="close" />
            </button>
            <form>
              <div className="form-title">
                <h1>Sign Up</h1>
              </div>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date of Birth:</label>
                <input
                  type="date"
                  id="date"
                  name="user_date_of_birth"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="user_address"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <button type="submit" onClick={onSubmitForm}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeButton;
