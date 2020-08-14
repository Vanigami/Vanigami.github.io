import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import rubyLogo from "../images/ruby.png";
import brandLogo from "../images/brandLogo.png";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="jumbotronHead jumbotron-fluid">
          <div class="container">
            <h2 class="main-header ">
              <img className="headerimg" src={brandLogo} />
            </h2>
          </div>
        </div>
        <Projects />

        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fab fa-angellist"></i>
            </div>
            <div class="flip-card-back">
              <h1>WEE </h1>
              <p>Cool</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
