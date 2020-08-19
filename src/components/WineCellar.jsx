import React, { Component } from "react";
import img2 from "../images/wcimg.png";

import SocialMediaBarAbout from "./SocialMediaBarAbout";

export default class WineCellar extends Component {
  render() {
    return (
      <div>
        <SocialMediaBarAbout />

        <div class="about-me-row">
          <div class="row text-center">
            <div class="container">
              <div>
                <img class="tspage" src={img2} />
              </div>
              <div class="about-me-card">
                <div class="about-me-card-body">
                  <h5 class="card-title"> Wine Cellar</h5>
                  <p class="about-me-card">
                    Wine Cellar is a web-based wine database built with Ruby on
                    Rails, where users can create an account, and rate and
                    review the wines they have tried. Built out with MVP ASAP
                    mindset, (minimum viable product, as soon as possible)
                    resulted in MVC functionality and clear app structure with
                    regards to object relationships. Utilized ActiveRecord scope
                    methods to filter through databases that enables users to
                    have more options to search and view data. Utilized Omniauth
                    so that users may create an account using a 3rd party
                    (GitHub).
                  </p>
                  <br />
                  <a
                    href="https://github.com/Vanigami/WineCellar"
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
                  src="https://www.youtube.com/embed/36w2xabkDvk"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
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
