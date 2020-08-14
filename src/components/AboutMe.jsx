import React, { Component } from "react";
import AboutMeCard from "./AboutMeCard";
import profilepic from "../images/profilepic.png";

class AboutMe extends Component {
  render() {
    return (
      <div>
        <p>
          <button
            class="buttonProject"
            type="button"
            data-toggle="collapse"
            data-target="#aboutMe"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            <i class="fas fa-id-card"></i>
            <text className="brandFont"> About Me</text>
          </button>
        </p>
        <div class="collapse" id="aboutMe">
          <div className="container-fluid d-flex justify-content-center">
            <div className="rowCard">
              <div className="col-md-4">
                <AboutMeCard imgsrc={profilepic} title="About Me" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutMe;
