import React from "react";

class SignInSocial extends React.Component {
  render() {
    return (
      <div className="social-login">
        <span className="social-label">Or login with</span>
        <ul className="socials">
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <i className="display-flex-center zmdi zmdi-google" />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SignInSocial;
