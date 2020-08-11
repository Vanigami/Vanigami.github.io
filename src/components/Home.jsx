import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";

import "../App.css";
const projectData = [
  {
    name: "Training Session",
  },
];
class Home extends React.Component {
  render() {
    return (
      <div>
        <ProjectCard />
      </div>
    );
  }
}

export default Home;
