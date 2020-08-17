import React, { Component } from "react";
import "./social-media-bar.css";

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div class="icon-bar">
        <a href="#" class="github">
          <i class="fab fa-github"></i>{" "}
        </a>
        <a href="#" class="medium">
          <i class="fab fa-medium"></i>
        </a>
        <a href="#" class="dev">
          <i class="fab fa-dev"></i>
        </a>
        <a href="#" class="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#" class="youtube">
          <i class="fab fa-youtube"></i>{" "}
        </a>
      </div>
    );
  }
}
