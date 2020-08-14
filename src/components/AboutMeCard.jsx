import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import "./card-style.css";

const AboutMeCard = () => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={profilepic} alt="About Me" className="card-img-top" />
      </div>
      <div className="card-body text-dark"></div>
      <h4 className="card-title">About Me</h4>
      <p className="card-text text-secondary">About Me</p>
      <a href="#" className=" btn btn-outline-success">
        Go Anywhere
      </a>
    </div>
  );
};
export default AboutMeCard;
