import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import "../App.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <li class="tab readme">
          <i class="fas fa-info-circle"></i>READ.me
        </li>

        <h2 class="animate_animated animate__fadeInLeft">Vanna Winland</h2>
        <p className="brandFont">
          Hi, my name is Vanna. I'm an English major turned software engineer.{" "}
          <br />
          I never thought I'd be sharing stories through the languages of the
          web, <br />
          but here you are.
        </p>
        <Projects />
        <div class="container">
          <span class="react-logo">
            <span class="nucleo"></span>
          </span>
        </div>

        <p class="title">React</p>
      </div>
    );
  }
}

export default Home;
