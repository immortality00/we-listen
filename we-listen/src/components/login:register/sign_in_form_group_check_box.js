import React from "react";

class SignInFormGroupCheckBox extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input
          type="checkbox"
          name="remember-me"
          id="remember-me"
          className="agree-term"
        />
        <label htmlFor="remember-me" className="label-agree-term">
          <span>
            <span />
          </span>
          Remember me
        </label>
      </div>
    );
  }
}

export default SignInFormGroupCheckBox;
