import React from "react";
import SignInImage from "./sign_in_image";
import SignInForm from "./sign_in_form";

class SignInContent extends React.Component {
  render() {
    return (
      <div className="signin-content">
        <SignInImage />
        <SignInForm />
      </div>
    );
  }
}

export default SignInContent;
