import React from "react";
import SignInFormGroupName from "./sign_in_form_group_name";
import SignInFormGroupPassword from "./sign_in_form_group_password";
import SignInFormGroupCheckBox from "./sign_in_form_group_check_box";
import SignInFormGroupButton from "./sign_in_form_group_button";

class SignInLoginForm extends React.Component {
  render() {
    return (
      <form method="POST" className="register-form" id="login-form">
        <SignInFormGroupName />
        <SignInFormGroupPassword />
        <SignInFormGroupCheckBox />
        <SignInFormGroupButton />
      </form>
    );
  }
}

export default SignInLoginForm;
