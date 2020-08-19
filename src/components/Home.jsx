import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import brandLogo from "../images/brandLogo.png";
import SocialMediaBar from "./SocialMediaBar";
import "../App.css";
import FlipCard from "./FlipCard";

class Home extends React.Component {
  render() {
    return (
      <div class="home-bg">
        <header>
          <div class="jumbotronHead jumbotron-fluid">
            <img className="headerimg" src={brandLogo} />
          </div>
        </header>
        <Projects />
        <div className="wayOver">
          <AboutMe />
        </div>
        <div class="flipCard">
          <FlipCard />
        </div>
        <div>
          <SocialMediaBar />
        </div>
      </div>
    );
  }
}

export default Home;
