import React from "react";

class SignUpFormGroupButton extends React.Component {
  render() {
    return (
      <div className="form-group form-button">
        <input
          type="submit"
          name="signup"
          id="signup"
          className="form-submit"
          defaultValue="Register"
        />
      </div>
    );
  }
}

export default SignUpFormGroupButton;
