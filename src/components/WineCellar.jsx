import React, { Component } from "react";
import img2 from "../images/wcimg.png";
import { Route, Link, useHistory } from "react-router-dom";
import SocialMediaBar from "./SocialMediaBar";
import SocialMediaBarAbout from "./SocialMediaBarAbout";

export default class WineCellar extends Component {
  render() {
    return (
      <div class="home-mob-bg">
        <div class="phoneContent">
          <SocialMediaBarAbout />
          <div class="divider-bg">
            <div class="project">
              <div class="carousel-container">
                <img class="mob" src={img2} />
              </div>
              <br />
              <p class="mob">
                Wine Cellar is a web-based wine database built with Ruby on
                Rails, where users can create an account, and rate and review
                the wines they have tried. Built out with MVP ASAP mindset,
                (minimum viable product, as soon as possible) resulted in MVC
                functionality and clear app structure with regards to object
                relationships. Utilized ActiveRecord scope methods to filter
                through databases that enables users to have more options to
                search and view data. Utilized Omniauth so that users may create
                an account using a 3rd party (GitHub).
              </p>
              <a href="https://github.com/Vanigami/WineCellar">
                <button class="repo-btn">
                  Github Repo <i class="fab fa-github"></i>
                </button>
              </a>
              <div class="mob">
                <iframe
                  width="300"
                  height="315"
                  src="https://www.youtube.com/embed/36w2xabkDvk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="deskContent">
          <SocialMediaBar />
          <div class="container-project">
            <br />
            <img class="tspage" src={img2} />
          </div>
          <br />
          <br />

          <div class="about-me-card">
            <div class="about-me-card-body">
              <h5 class="card-title"> Wine Cellar </h5>
              <p class="about-me-card">
                Wine Cellar is a web-based wine database built with Ruby on
                Rails, where users can create an account, and rate and review
                the wines they have tried. Built out with MVP ASAP mindset,
                (minimum viable product, as soon as possible) resulted in MVC
                functionality and clear app structure with regards to object
                relationships. Utilized ActiveRecord scope methods to filter
                through databases that enables users to have more options to
                search and view data. Utilized Omniauth so that users may create
                an account using a 3rd party (GitHub).
              </p>
              <br />
              <a href="https://github.com/Vanigami/WineCellar">
                <button class="repo-btn">
                  GitHub Repo <i class="fab fa-github"></i>
                </button>
              </a>
              <br />
              <br />
              Check out the demo video below!
              <br />
              <i class="far fa-arrow-alt-circle-down fa-4x"></i>
            </div>
          </div>
        </div>
        <div class="deskContent">
          <div class="container-sm">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/36w2xabkDvk"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <container class="related-content">
          You May Also Like:
          <Link to="/Fitness-SPA"> Fitness-SPA</Link>
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
