import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";
import img2 from "../images/wcimg.png";
import img3 from "../images/fspaimg.png";

class Projects extends Component {
  render() {
    return (
      <div>
        <p>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#collapseExample"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="fas fa-project-diagram"></i>
            <text className="brandFont">Projects</text>
          </button>
        </p>
        <div class="collapse" id="collapseExample">
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
        </div>
      </div>
    );
  }
}
export default Projects;
