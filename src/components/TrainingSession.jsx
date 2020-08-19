import React, { Component } from "react";
import img1 from "../images/tsimg.png";
import SocialMediaBarAbout from "./SocialMediaBarAbout";

import "../App.css";

export default class TrainingSession extends Component {
  render() {
    return (
      <div>
        <SocialMediaBarAbout />
        <div class="phoneContent">
          <div>
            <img class="mob" src={img1} />
          </div>
          <p class="mob">
            Training Session is a web application focused on fitness logging. It
            is built with a Rails API backend and a React-redux Front-End. Uses
            react-router with RESTFUL routing, resulting in clear web URLs and
            easy data manipulation and HTTP mapping. Manages state using Redux
            middleware in order to respond to and manage state, resulting in a
            smoother user experience with regard to rendering pages and action
            results. Makes use of react-thunk middleware to send to and receive
            data from a server.
          </p>
          <a href="https://github.com/Vanigami/training-session-frontend">
            <button class="repo-btn">
              {" "}
              GitHub Repo <i class="fab fa-github"></i>
            </button>
          </a>
          <div class="mob">
            <iframe
              width="300"
              height="315"
              src="https://www.youtube.com/embed/4PK4Rw1SW1k"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="deskContent">
          <div class="about-me-row">
            <div class="row text-center">
              <div class="container">
                <img class="tspage" src={img1} />
              </div>

              <div class="about-me-card">
                <div class="about-me-card-body">
                  <h5 class="card-title"> Training Session </h5>
                  <p class="about-me-card">
                    Training Session is a web application focused on fitness
                    logging. It is built with a Rails API backend and a
                    React-redux Front-End. Uses react-router with RESTFUL
                    routing, resulting in clear web URLs and easy data
                    manipulation and HTTP mapping. Manages state using Redux
                    middleware in order to respond to and manage state,
                    resulting in a smoother user experience with regard to
                    rendering pages and action results. Makes use of react-thunk
                    middleware to send to and receive data from a server.
                  </p>
                  <br />
                  <button class="repo-btn">
                    GitHub Repo <i class="fab fa-github"></i>
                  </button>
                  <br />
                  <br />
                  Check out the demo video below!
                  <br />
                  <i class="far fa-arrow-alt-circle-down fa-4x"></i>
                </div>
              </div>
            </div>
            <div class="container-sm">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4PK4Rw1SW1k"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <container class="related-content">
          You May Also Like:
          <a href="/WineCellar"> Wine Cellar</a>
        </container>
        <footer>
          <button class="back-button">
            <a href="/">
              <i class="fas fa-home"></i>
            </a>
          </button>
        </footer>
      </div>
    );
  }
}
