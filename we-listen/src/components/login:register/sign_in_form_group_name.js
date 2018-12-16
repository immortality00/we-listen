import React from "react";

class SignInFormGroupName extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="your_name">
          <i className="zmdi zmdi-account material-icons-name" />
        </label>
        <input
          type="text"
          name="your_name"
          id="your_name"
          placeholder="Your Name"
        />
      </div>
    );
  }
}

export default SignInFormGroupName;
