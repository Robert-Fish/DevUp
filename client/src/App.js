import React, { Component } from "react";
// Component imports
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
/////
import "./App.scss";

// React router
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
