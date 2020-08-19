import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMeCard from "./components/AboutMeCard";
import TrainingSession from "./components/TrainingSession";
import WineCellar from "./components/WineCellar";
import Fitness from "./components/Fitness";

// import "App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={AboutMeCard} />
          <Route path="/TrainingSession" component={TrainingSession} />
          <Route path="/WineCellar" component={WineCellar} />
          <Route
            path="https://vanigami.github.io/Fitness-SPA/Fitness-Spa"
            component={Fitness}
          />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
