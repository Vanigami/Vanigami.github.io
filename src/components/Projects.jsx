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
          <a
            class="btn btn-primary"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Toggle first element
          </a>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Toggle second element
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            Toggle both elements
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                  <div className="col-md-4">
                    <ProjectCard imgsrc={img1} title="Training Session" />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="collapse multi-collapse" id="multiCollapseExample2">
                  <div class="card card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </div>
                </div>
              </div>
            </div>
          </div>
          //{" "}
          <div className="col-md-4">
            // <ProjectCard imgsrc={img2} title="Wine Cellar" />
            //{" "}
          </div>
          //{" "}
          <div className="col-md-4">
            // <ProjectCard imgsrc={img3} title="Fitness-SPA" />
            //{" "}
          </div>
          //{" "}
        </div>
        //{" "}
      </div>
    );
  }
}
export default Projects;
