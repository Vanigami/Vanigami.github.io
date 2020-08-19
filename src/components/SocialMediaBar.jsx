import React, { Component } from "react";
import "./social-media-bar.css";
import blogLogo from "../images/blog-logo-small.png";

export default class SocialMediaBar extends Component {
  render() {
    return (
      <div class="icon-bar">
        <a href="https://github.com/Vanigami" class="github">
          <i class="fab fa-github"></i>{" "}
        </a>
        <a href="https://medium.com/@vgwinland" class="medium">
          <i class="fab fa-medium"></i>
        </a>
        <a href="https://dev.to/vanigami" class="dev">
          <i class="fab fa-dev"></i>
        </a>
        <a href="https://www.linkedin.com/in/vanna-winland/" class="linkedin">
          <i class="fab fa-linkedin"></i>
        </a>
        <a
          href="https://www.youtube.com/channel/UCdrxh77yAZZB3S_IPKgDsfg?"
          class="youtube"
        >
          <i class="fab fa-youtube"></i>{" "}
        </a>
      </div>
    );
  }
}
