import React, { Component } from "react";
import rubyLogo from "../images/smallruby.png";

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
                <span>Ruby </span>
                <img src={rubyLogo} /> <br />
                <span>JavaScript </span>
                <i class="fab fa-js"></i>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
