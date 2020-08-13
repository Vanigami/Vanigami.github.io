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

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Languages</th>
              <th scope="col">Frameworks/Databases</th>
              <th scope="col">Deployment</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <div class="container">
                  <span class="react-logo">
                    <span class="nucleo"></span>
                  </span>
                </div>

                <p class="title">React</p>
              </td>
              <td>
                <div>
                  <span>
                    <img class="ruby-logo" src={rubyLogo} alt="ruby-logo" />
                  </span>
                </div>
              </td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Home;
