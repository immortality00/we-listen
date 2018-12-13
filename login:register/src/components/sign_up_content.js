import React from "react";
import SignUpForm from "./sign_up_form";
import SignUpImage from "./sign_up_image";

class SignUpContent extends React.Component {
  render() {
    return (
      <div className="signup-content">
        <SignUpForm />
        <SignUpImage />
      </div>
    );
  }
}

export default SignUpContent;
