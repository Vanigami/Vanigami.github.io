import React, { Component } from "react";
import profilepic from "../images/profilepic.png";
import whiteLogo from "../images/logowhite.png";
import "./card-style.css";
import blogLogo from "../images/blog-logo-web.png";
import { Route, Link, useHistory } from "react-router-dom";
import SocialMediaBarAbout from "./SocialMediaBarAbout";

const AboutMeCard = () => {
  return (
    <div class="about-me-bg">
      <SocialMediaBarAbout />

      <div class="avatar">
        <a href="https://vannawinland.myportfolio.com/">
          <img class="avatar" src={profilepic} />
        </a>
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
        <br />
        <div class="phoneContent">
          <p class="mob">
            After receiving a formal education in English and creative writing
            at the university of Akron, I never thought that I'd find myself
            storytelling through the languages of the web. Coding turned from a
            hobby into a pursuit, merging my love for writing and interest in
            tech. Soon after finding community among software engineering groups
            on the web, I decided to pursue a career as a full-stack developer.
            I took my first steps towards that goal at Flatiron School's
            full-stack software engineering program. While studying at Flatiron,
            I had the opportunity to meet and work with many talented
            individuals. I'm proud to be a recent Flatiron alumni and look
            forward to lending my critical and creative thinking skills to a
            company who values innovation and creativity. I have experience
            building applications with the following tech: Ruby on Rails,
            Javascript (ES6), Restful APIs, React, Redux, SQL, Postgres, Github,
            and Heroku. <br />
            <a href="https://vannawinland.myportfolio.com/">
              Learn more about me by visiting my blog!
            </a>
          </p>
          <a href="mailto:vgwinland@gmail.com" class="btn btn-primary">
            Email Me
          </a>
          <br />
        </div>
        <div class="deskContent">
          <div class="about-me-row">
            <div class="container-fluid">
              <div class="row text-center">
                <div class="about-me-card">
                  <div class="about-me-card-body">
                    <h5 class="card-title"> / About Me </h5>
                    <p class="about-me-card">
                      After receiving a formal education in English and creative
                      writing at the university of Akron, I never thought that
                      I'd find myself storytelling through the languages of the
                      web. Coding turned from a hobby into a pursuit, merging my
                      love for writing and interest in tech. Soon after finding
                      community among software engineering groups on the web, I
                      decided to pursue a career as a full-stack developer. I
                      took my first steps towards that goal at Flatiron School's
                      full-stack software engineering program. While studying at
                      Flatiron, I had the opportunity to meet and work with many
                      talented individuals. I'm proud to be a recent Flatiron
                      alumni and look forward to lending my critical and
                      creative thinking skills to a company who values
                      innovation and creativity. I have experience building
                      applications with the following tech: Ruby on Rails,
                      Javascript (ES6), Restful APIs, React, Redux, SQL,
                      Postgres, Github, and Heroku.
                    </p>
                    <br />
                    <a
                      href="mailto:vgwinland@gmail.com"
                      class="btn btn-primary"
                    >
                      Email Me
                    </a>
                    <br />
                    <br />
                    Check out my blog below!
                    <br />
                    <i class="far fa-arrow-alt-circle-down fa-4x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="deskContent">
          <div class="logo">
            <a href="https://vannawinland.myportfolio.com/">
              <img class="blog" src={blogLogo} />
            </a>
          </div>
        </div>
        <br />
        <footer>
          <button class="back-button">
            <a href="/">
              <i class="far fa-arrow-alt-circle-left fa-3x"></i>
            </a>
          </button>
        </footer>
      </div>
    </div>
  );
};
export default AboutMeCard;
