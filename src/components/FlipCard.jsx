import React, { Component } from "react";
import rubyLogo from "../images/smallruby.png";
import RoRLogo from "../images/smallerRoR.png";
import SinatraLogo from "../images/smallSinatra.png";
import reactLogo from "../images/reactLogo.png";
import reduxLogo from "../images/reduxLogo.png";
import nodeJSLogo from "../images/smallNodeJS.png";

export default class FlipCard extends Component {
  render() {
    return (
      <div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fab fa-angellist"></i>
            </div>
            <div class="flip-card-back">
              <ul>
                <span>Programming Lanuages</span>
                <br />
                <span>Ruby </span>
                <img src={rubyLogo} /> <br />
                <span>JavaScript </span>
                <i class="fab fa-js"></i> <br />
                <span>Libraries + Frameworks</span>
                <br />
                <img src={RoRLogo} />
                <br />
                <img src={SinatraLogo} />
                <br />
                <img src={reactLogo} />
                <br />
                <img src={reduxLogo} />
                <br />
                <img src={nodeJSLogo} />
              </ul>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <i class="fab fa-angellist"></i>
            </div>
            <div class="flip-card-back">
              <ul>
                <span>Ruby </span>
                <img src={rubyLogo} /> <br />
                <span>JavaScript </span>
                <i class="fab fa-js"></i> <br />
                <span>Libraries + Frameworks</span>
                <br />
                <img src={RoRLogo} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
