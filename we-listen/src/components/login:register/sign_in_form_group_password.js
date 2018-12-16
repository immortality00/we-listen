import React from "react";

class SignInFormGroupPassword extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="your_pass">
          <i className="zmdi zmdi-lock" />
        </label>
        <input
          type="password"
          name="your_pass"
          id="your_pass"
          placeholder="Password"
        />
      </div>
    );
  }
}

export default SignInFormGroupPassword;
