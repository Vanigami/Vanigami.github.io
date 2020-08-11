import React, { Component } from "react";

import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import "../App.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 className="brandFont">Vanna Winland</h2>
        <p className="brandFont">
          Hi, my name is Vanna. I'm an English major turned software engineer.{" "}
          <br />
          I never thought I'd be sharing stories through the languages of the
          web. <br />
          But here you are.
        </p>
        <Projects />
      </div>
    );
  }
}

export default Home;
