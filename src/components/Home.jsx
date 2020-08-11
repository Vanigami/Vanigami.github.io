import React, { Component } from "react";

import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import "../App.css";
class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 className="brandFont">Vanna Winland</h2>
        <Projects />
      </div>
    );
  }
}

export default Home;
