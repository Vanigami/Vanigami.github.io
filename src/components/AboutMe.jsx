import React, { Component } from "react";
import { Route, Link, useHistory } from "react-router-dom";
import AboutMeCard from "./AboutMeCard";
import profilepic from "../images/profilepic.png";

class AboutMe extends Component {
  render() {
    return (
      <p>
        <div className="wayOver">
          <Link to="/aboutme" class="buttonProject">
            About Me
          </Link>
        </div>
      </p>
    );
  }
}
export default AboutMe;
