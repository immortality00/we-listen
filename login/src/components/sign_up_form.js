import React from "react";
import SignUpFormTitle from "./sign_up_form_title";
import SignUpRegisterForm from "./sign_up_register_form";

class SignUpForm extends React.Component {
  render() {
    return (
      <div className="signup-form">
        <SignUpFormTitle />
        <SignUpRegisterForm />
      </div>
    );
  }
}

export default SignUpForm;
