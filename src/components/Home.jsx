import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import brandLogo from "../images/brandLogo.png";
import yellowLogo from "../images/yellow-logo.png";
import projects from "../images/project-tap.png";
import projectClick from "../images/project-click.png";
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
                <img className="headerimg" src={yellowLogo} />
              </div>
            </header>

            <br />
            <div className="wayOver">
              <AboutMe />
            </div>
            <div class="flipCard">
              <FlipCard />
            </div>
            <br />
            <div>
              <img class="projects-img" src={projects} />
            </div>
            <div>
              <Projects />
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
                <img className="headerimg" src={yellowLogo} />
              </div>
            </header>

            <br />
            <div className="wayOver">
              <AboutMe />
            </div>
            <div class="flipCard">
              <FlipCard />
            </div>
            <div>
              <img class="project-desk" src={projectClick} />
            </div>
            <Projects />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
