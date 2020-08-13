import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import Projects from "./Projects";
import rubyLogo from "../images/ruby.png";
import "../App.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h2 class="main-header ">Vanna Winland</h2>
        <p className="brandFont">
          Hi, my name is Vanna. I'm an English major turned software engineer.{" "}
          <br />
          I never thought I'd be sharing stories through the languages of the
          web, <br />
          but here you are.
        </p>
        <Projects />
        <p>
          <a
            class="btn btn-primary"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Toggle first element
          </a>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Toggle second element
          </button>
          <button
            class="btn btn-primary"
            type="button"
            data-toggle="collapse"
            data-target=".multi-collapse"
            aria-expanded="false"
            aria-controls="multiCollapseExample1 multiCollapseExample2"
          >
            Toggle both elements
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample1">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse multi-collapse" id="multiCollapseExample2">
              <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. Nihil anim keffiyeh
                helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
