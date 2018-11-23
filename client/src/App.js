import React, { Component } from "react";
// Component imports
import NavBar from "./components/layout/Navbar";
import "./App.scss";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch />
        </div>
      </Router>
    );
  }
}

export default App;
