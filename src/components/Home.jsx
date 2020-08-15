import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import brandLogo from "../images/brandLogo.png";

import "../App.css";
import FlipCard from "./FlipCard";

class Home extends React.Component {
  render() {
    return (
      <div class="home-bg">
        <div class="jumbotronHead jumbotron-fluid">
          <div class="container">
            <h2 class="main-header ">
              <img className="headerimg" src={brandLogo} />
            </h2>
          </div>
        </div>
        <Projects />
        <div className="wayOver">
          <AboutMe />
        </div>
        <div class="flipCard">
          <FlipCard />
        </div>
      </div>
    );
  }
}

export default Home;
