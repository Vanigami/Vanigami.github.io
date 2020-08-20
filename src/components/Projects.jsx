import React, { Component } from "react";
import { Route, Link, useHistory } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";
import img2 from "../images/wcimg.png";
import img3 from "../images/fspaimg.png";

class Projects extends Component {
  render() {
    return (
      <div class="carousel-container">
        <div class="carousel">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <Link to="/Fitness-SPA">
                  <img class="carousel" src={img3} alt="First slide" />
                </Link>
              </div>
              <div class="carousel-item">
                <Link to="/WineCellar">
                  <img class="d-block " src={img2} alt="Second slide" />
                </Link>
              </div>
              <div class="carousel-item">
                <Link to="/TrainingSession">
                  <img class="d-block" src={img1} alt="Third slide" />
                </Link>
              </div>
            </div>
            <a
              class="carousel-control-prev black"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Projects;
