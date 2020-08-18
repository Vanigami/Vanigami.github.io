import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import whiteLogo from "../images/logowhite.png";
import "./card-style.css";
import { Route, Link, useHistory } from "react-router-dom";

const AboutMeCard = () => {
  return (
    <div class="about-me-bg">
      <div class="avatar">
        <img class="avatar" src={profilepic} />
      </div>
      <div class="white-logo">
        {" "}
        <img class="white-logo" src={whiteLogo} />
      </div>

      <div class="about-me">
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
        <span class="about-me-leftish">
          but here you are.
          <br />
        </span>
        <div class="about-me-row">
          <div class="col-sm-6 col-center">
            <div class="about-me-card">
              <div class="about-me-card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="about-me-card">
                  After receiving a formal education in English and creative
                  writing at the university of Akron, I never thought that I'd
                  find myself storytelling through the languages of the web.
                  Coding turned from a hobby into a pursuit, merging my love for
                  writing and interest in tech. Soon after finding community
                  among software engineering groups on the web, I decided to
                  pursue a career as a full-stack developer. I took my first
                  steps towards that goal at Flatiron School's full-stack
                  software engineering program. While studying at Flatiron, I
                  had the opportunity to meet and work with many talented
                  individuals. I'm proud to be a recent Flatiron alumni and look
                  forward to lending my critical and creative thinking skills to
                  a company who values innovation and creativity. I have
                  experience building applications with the following tech: Ruby
                  on Rails, Javascript (ES6), Restful APIs, React, Redux, SQL,
                  Postgres, Github, and Heroku.
                </p>
                <a href="mailto:vgwinland@gmail.com" class="btn btn-primary">
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMeCard;
