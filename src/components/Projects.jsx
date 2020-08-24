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
          <img class="grid-img" src={img1}></img>
        </div>
        <div class="grid-item">
          <img class="grid-img" src={img2}></img>
        </div>
        <div class="grid-item">
          <img class="grid-img" src={img3}></img>
        </div>
      </div>
    );
  }
}
export default Projects;
