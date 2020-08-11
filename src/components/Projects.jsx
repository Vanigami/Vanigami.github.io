import React, { Component } from "react";
import ProjectCard from "./ProjectCard";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div calssName="col-md-4">
            <ProjectCard />
          </div>
          <div calssName="col-md-4">
            <ProjectCard />
          </div>
          <div calssName="col-md-4">
            <ProjectCard />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
