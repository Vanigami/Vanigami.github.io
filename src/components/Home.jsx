import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import brandLogo from "../images/brandLogo.png";
import SocialMediaBar from "./SocialMediaBar";
import "../App.css";
import FlipCard from "./FlipCard";

class Home extends React.Component {
  render() {
    return (
      <div class="home-bg">
        <header>
          <div class="jumbotronHead jumbotron-fluid">
            <img className="headerimg" src={brandLogo} />
          </div>
        </header>
        <Projects />
        <div className="wayOver">
          <AboutMe />
        </div>
        <div class="flipCard">
          <FlipCard />
        </div>
        <div>
          <SocialMediaBar />
        </div>
        <div class="phoneContent">
          <div class="container">
            <h2>Carousel Example</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>

              <div class="carousel-inner">
                <div class="item active">
                  <img src="la.jpg" alt="Los Angeles" />
                </div>

                <div class="item">
                  <img src="chicago.jpg" />
                </div>

                <div class="item">
                  <img src="ny.jpg" />
                </div>
              </div>

              <a
                class="left carousel-control"
                href="#myCarousel"
                data-slide="prev"
              >
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="right carousel-control"
                href="#myCarousel"
                data-slide="next"
              >
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
