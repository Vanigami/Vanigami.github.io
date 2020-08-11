import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";
import img2 from "../images/wcimg.png";
import img3 from "../images/fspaimg.png";

class Projects extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center">
        <div className="row">
          <div className="col-md-4">
            <ProjectCard imgsrc={img1} title="Training Session" />
          </div>
          <div className="col-md-4">
            <ProjectCard imgsrc={img2} title="Wine Cellar" />
          </div>
          <div className="col-md-4">
            <ProjectCard imgsrc={img3} title="Fitness-SPA" />
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
