import React from "react";

class SignUpFormGroupName extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="name">
          <i className="zmdi zmdi-account material-icons-name" />
        </label>
        <input type="text" name="name" id="name" placeholder="Your Name" />
      </div>
    );
  }
}

export default SignUpFormGroupName;
