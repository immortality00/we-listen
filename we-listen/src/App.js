import React, { Component } from "react";
import LandingPage from "./components/landingPage/LandingPage";
import { Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/login:register/sign_in";
import SignUp from "./components/login:register/sign_up";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" exact component={SignIn} />
          <Route path="/Signup" exact component={SignUp} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
