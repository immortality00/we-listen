import React from "react";
import SignUp from "./sign_up";
import SignIn from "./sign_in";

class Main extends React.Component {
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

export default Main;
