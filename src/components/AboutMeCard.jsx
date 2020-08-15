import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import whiteLogo from "../images/logowhite.png";
import "./card-style.css";
import { Route, Link, useHistory } from "react-router-dom";

const AboutMeCard = () => {
  return (
    <div class="about-me-bg">
      <img class="avatar" src={profilepic} />
      <img class="white-logo" src={whiteLogo} />
      <div clas="about-me">
        <span class="about-me">Hello, my name is Vanna. </span>
        <br />
        <span class="about-me-leftish">
          I'm an English major turned software engineer.
          <br />
        </span>
        <span class="about-me-leftish2">
          I never thought that I'd be telling stories
          <br />
        </span>
        <span class="about-me-leftish3">
          through the languages of the web,
          <br />
        </span>
        <span class="about-me-leftish4">
          but here you are.
          <br />
        </span>
      </div>
    </div>
  );
};
export default AboutMeCard;
