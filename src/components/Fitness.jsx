import React, { Component } from "react";
import img3 from "../images/fspaimg.png";
import SocialMediaBarAbout from "./SocialMediaBarAbout";

export default class Fitness extends Component {
  render() {
    return (
      <div>
        <SocialMediaBarAbout />
        <img class="tspage" src={img3} />
        <div class="about-me-row">
          <div class="row text-center">
            <div class="about-me-card">
              <div class="about-me-card-body">
                <h5 class="card-title"> Fitness-SPA</h5>
                <p class="about-me-card">
                  Fitness-SPA is a single-page fitness application built with an
                  HTML, CSS, and JavaScript frontend and a backend API built
                  using Ruby on Rails. Translated JSON responses into JavaScript
                  model objects in order to create a functional application.
                  Created DOM nodes and listeners to respond to user
                  interaction. Used event interface methods to control form
                  submit behavior.
                </p>
                <br />
                <a
                  href="https://github.com/Vanigami/fitness-spa"
                  class="btn btn-primary"
                >
                  GitHub Repo
                </a>
                <br />
                <br />
                Check out the demo video below!
                <br />
                <i class="far fa-arrow-alt-circle-down fa-4x"></i>
              </div>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/9ThBqzOM_Qc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <a href="/">
          <button class="back-button">Back To Home</button>
        </a>
      </div>
    );
  }
}
