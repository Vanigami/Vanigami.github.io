import React, { Component } from "react";
import { Route, Link, useHistory } from "react-router-dom";

import ProjectCard from "./ProjectCard";
import img1 from "../images/tsimg.png";
import img2 from "../images/wcimg.png";
import img3 from "../images/fspaimg.png";

class Projects extends Component {
  render() {
    return (
      <div class="grid">
        <div class="grid-item">
          <Link to="/TrainingSession">
            <img class="grid-img" src={img1}></img>
          </Link>
        </div>
        <div class="grid-item">
          <Link to="/WineCellar">
            <img class="grid-img" src={img2}></img>
          </Link>
        </div>
        <div class="grid-item">
          <Link to="/Fitness-SPA">
            <img class="grid-img" src={img3}></img>
          </Link>
        </div>
      </div>
    );
  }
}
export default Projects;
