import React from "react";

class SignUpFormGroupEmail extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="email">
          <i className="zmdi zmdi-email" />
        </label>
        <input type="email" name="email" id="email" placeholder="Your Email" />
      </div>
    );
  }
}

export default SignUpFormGroupEmail;
