import React, { Component } from "react";
import SignIn from "./components/sign_in";
import SignUp from "./components/sign_up";

class App extends Component {
  render() {
    return (
      <div className="main">
        {}
        <SignUp />
        {}
        <SignIn />
      </div>
    );
  }
}

export default App;
