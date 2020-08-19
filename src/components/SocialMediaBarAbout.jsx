import React, { Component } from "react";
import "./social-media-bar.css";
import blogLogo from "../images/blog-logo-small.png";

export default class SocialMediaBarAbout extends Component {
  render() {
    return (
      <div class="about-icon-bar">
        <a href="https://github.com/Vanigami" class="about-github">
          <i class="fab fa-github"></i>{" "}
        </a>
        <a href="#https://medium.com/@vgwinland" class="about-medium">
          <i class="fab fa-medium"></i>
        </a>
        <a href="https://dev.to/vanigami" class="about-dev">
          <i class="fab fa-dev"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/vanna-winland/"
          class="about-linkedin"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCdrxh77yAZZB3S_IPKgDsfg?"
          class="about-youtube"
        >
          <i class="fab fa-youtube"></i>{" "}
        </a>
      </div>
    );
  }
}
