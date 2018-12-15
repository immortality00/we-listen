import React from "react";
import SignInFormTitle from "./sign_in_form_title";
import SignInLoginForm from "./sign_in_login_form";
import SignInSocial from "./sign_in_social";

class SignInForm extends React.Component {
  render() {
    return (
      <div className="signin-form">
        <SignInFormTitle />
        <SignInLoginForm />
        <SignInSocial />
      </div>
    );
  }
}

export default SignInForm;
