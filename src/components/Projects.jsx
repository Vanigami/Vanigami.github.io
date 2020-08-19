import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";
import img2 from "../images/wcimg.png";
import img3 from "../images/fspaimg.png";

class Projects extends Component {
  render() {
    return (
      <div class="carousel">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <a href="/Fitness-SPA">
                <img class="carousel" src={img3} alt="First slide" />
              </a>
            </div>
            <div class="carousel-item">
              <a href="/WineCellar">
                <img class="d-block " src={img2} alt="Second slide" />
              </a>
            </div>
            <div class="carousel-item">
              <a href="/TrainingSession">
                <img class="d-block" src={img1} alt="Third slide" />
              </a>
            </div>
          </div>
          <a
            class="carousel-control-prev black"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
export default Projects;
