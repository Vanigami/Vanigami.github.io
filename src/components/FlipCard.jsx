import React, { Component } from "react";
import rubyLogo from "../images/smallruby.png";
import RoRLogo from "../images/smallerRoR.png";
import SinatraLogo from "../images/smallSinatra.png";
import reactLogo from "../images/reactLogo.png";
import reduxLogo from "../images/reduxLogo.png";
import nodeJSLogo from "../images/smallNodeJS.png";
import postgresLogo from "../images/postgrelogo-tiny.png";
import uaLogo from "../images/ua-logo-smaller.png";
import flatironLogo from "../images/flatiron-logo-smaller.png";
import herokuLogo from "../images/heroku-logo-smaller.png";
export default class FlipCard extends Component {
  render() {
    return (
      <div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <span>Experience</span>
              <br />
              <br />
              <i class="fas fa-laptop-code fa-5x"></i>
              <br />
              <br />
              <br />
              <i class="fas fa-database fa-5x"></i>
              <br />
              <br />
              <br />
              <i class="fas fa-code fa-5x"></i>
              <br />
              <br />
              <br />
              <i class="fas fa-code-branch fa-5x"></i>
              <br />
              <br />
              <br />
              <i class="fas fa-graduation-cap fa-5x"></i>
            </div>
            <div class="flip-card-back">
              <ul>
                <span class="flipHeading">Programming Languages</span>
                <br />
                <li>
                  <span>Ruby </span>
                  <img src={rubyLogo} />
                </li>

                <li>
                  <span>JavaScript </span>
                  <i class="fab fa-js"></i>{" "}
                </li>
                <br />
                <span class="flipHeading">Frameworks + Libraries</span>
                <br />
                <li>
                  <span class="flip-card-back">Ruby on Rails </span>
                  <span>Ruby on Rails </span>
                  <img src={RoRLogo} />{" "}
                </li>
                <li>
                  <span>Sinatra </span>
                  <img src={SinatraLogo} />
                </li>
                <li>
                  <span>React </span>
                  <img src={reactLogo} />
                </li>
                <li>
                  <span>Redux </span>
                  <img src={reduxLogo} />
                </li>
                <li>
                  <span>NodeJS </span>
                  <img src={nodeJSLogo} />
                </li>
                <br />
                <span class="flipHeading">Databases</span>
                <br />
                <li>
                  <span>SQL </span>
                  <i class="fas fa-database"></i>
                </li>
                <li>
                  <span>Postgresql </span>
                  <img src={postgresLogo} />
                </li>
                <br />
                <span class="flipHeading">Deployment</span>
                <br />
                <li>
                  <span>Heroku </span>
                  <img src={herokuLogo} />
                </li>
                <li>
                  <span>GitHub Pages</span>
                  <i class="fab fa-github"></i>
                </li>
                <br />
                <span class="flipHeading">Education</span>
                <br />
                <li>
                  <span>University of Akron </span>
                  <img src={uaLogo} />
                  <br />
                  B.A. English
                  <br />
                  August 2013 - May 2017
                </li>
                <li>
                  <span>Flatiron School </span>
                  <img src={flatironLogo} />
                  <br />
                  Full-Stack Software Engineering Bootcamp
                  <br /> September 2019 - August 2020
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
