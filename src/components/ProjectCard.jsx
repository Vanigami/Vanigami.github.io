import React, { Component } from "react";
import img1 from "../images/tsimg.png";
import "./card-style.css";

const ProjectCard = (props) => {
  return (
    <div className="card text-center">
      <div className="overflow">
        <img src={props.imgsrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark"></div>
      <h4 className="card-title">{props.title}</h4>
      <p className="card-text text-secondary">React/JS</p>
      <a href={props.link} className=" btn btn-outline-success">
        See More
      </a>
    </div>
  );
};
export default ProjectCard;
