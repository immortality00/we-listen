import React from "react";

class SignUpFormGroupRePassword extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="re-pass">
          <i className="zmdi zmdi-lock-outline" />
        </label>
        <input
          type="password"
          name="re_pass"
          id="re_pass"
          placeholder="Repeat your password"
        />
      </div>
    );
  }
}

export default SignUpFormGroupRePassword;
