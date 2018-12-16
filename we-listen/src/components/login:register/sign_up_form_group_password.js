import React from "react";

class SignUpFormGroupPassword extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="pass">
          <i className="zmdi zmdi-lock" />
        </label>
        <input type="password" name="pass" id="pass" placeholder="Password" />
      </div>
    );
  }
}

export default SignUpFormGroupPassword;
