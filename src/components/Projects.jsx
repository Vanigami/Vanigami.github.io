import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div calssName="col-md-4">
            <ProjectCard imgsrc={img1} />
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
