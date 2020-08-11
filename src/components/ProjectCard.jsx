import React, { Component } from "react";
import img1 from "../images/tsimg.png";

const ProjectCard = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={img1} alt="Image 1" />
      </div>
      <div className="card-body text-dark"></div>
      <h4 className="card-title">Training Session</h4>
      <p className="card-text text-secondary">React/JS</p>
      <a href="#" className=" btn btn-outline-success">
        Go Anywhere
      </a>
    </div>
  );
};
export default ProjectCard;
