import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import rubyLogo from "../images/ruby.png";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 class="main-header ">Vanna Winland</h2>
        <p className="brandFont">
          Hi, my name is Vanna. I'm an English major turned software engineer.{" "}
          <br />
          I never thought I'd be sharing stories through the languages of the
          web, <br />
          but here you are.
        </p>
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
