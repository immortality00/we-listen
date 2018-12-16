import React from "react";

class SignInFormGroupButton extends React.Component {
  render() {
    return (
      <div className="form-group form-button">
        <input
          type="submit"
          name="signin"
          id="signin"
          className="form-submit"
          defaultValue="Log in"
        />
      </div>
    );
  }
}

export default SignInFormGroupButton;
