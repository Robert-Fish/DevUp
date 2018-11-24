import React, { Component } from "react";
// Component imports
import NavBar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
/////
import "./App.scss";

// token helpers
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
///////////

import { Provider } from "react-redux";
import store from "./store";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// React router
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

// Check for token
if (localStorage.jwtToken) {
  // Srt auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and gets user info
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout
    store.dispatch(logoutUser());
    // Clear current profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <NavBar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
