import React from "react";
import SignUpFormGroupName from "./sign_up_form_group_name";
import SignUpFormGroupEmail from "./sign_up_form_group_email";
import SignUpFormGroupPassword from "./sign_up_form_group_password";
import SignUpFormGroupRePassword from "./sign_up_form_group_re_password";
import SignUpFormGroupCheckBox from "./sign_up_form_group_check_box";
import SignUpFormGroupButton from "./sign_up_form_group_button";

class SignUpRegisterForm extends React.Component {
  render() {
    return (
      <form method="POST" className="register-form" id="register-form">
        <SignUpFormGroupName />
        <SignUpFormGroupEmail />
        <SignUpFormGroupPassword />
        <SignUpFormGroupRePassword />
        <SignUpFormGroupCheckBox />
        <SignUpFormGroupButton />
      </form>
    );
  }
}

export default SignUpRegisterForm;
