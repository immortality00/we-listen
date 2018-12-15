import React from "react";

class SignUpFormGroupCheckBox extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input
          type="checkbox"
          name="agree-term"
          id="agree-term"
          className="agree-term"
        />
        <label htmlFor="agree-term" className="label-agree-term">
          <span>
            <span />
          </span>
          I agree all statements in{" "}
          <a href="#" className="term-service">
            Terms of service
          </a>
        </label>
      </div>
    );
  }
}

export default SignUpFormGroupCheckBox;
