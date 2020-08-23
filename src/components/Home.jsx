import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import brandLogo from "../images/brandLogo.png";
import whiteLogo from "../images/logowhite.png";

import SocialMediaBar from "./SocialMediaBar";
import SocialMediaBarAbout from "./SocialMediaBarAbout";
import "../App.css";
import FlipCard from "./FlipCard";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="phoneContent">
          <div class="home-mob-bg">
            <header>
              <div class="jumbotronHead jumbotron-fluid">
                <img className="headerimg" src={whiteLogo} />
              </div>
            </header>
            <br />
            <Projects />
            <div className="wayOver">
              <AboutMe />
            </div>
            <div class="flipCard">
              <FlipCard />
            </div>
            <div>
              <SocialMediaBarAbout />
            </div>
          </div>
        </div>
        <div class="deskContent">
          <SocialMediaBar />
          <div class="home-bg">
            <header>
              <div class="jumbotronHead jumbotron-fluid">
                <img className="headerimg" src={whiteLogo} />
              </div>
            </header>
            <br />
            <Projects />
            <div className="wayOver">
              <AboutMe />
            </div>
            <div class="flipCard">
              <FlipCard />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
