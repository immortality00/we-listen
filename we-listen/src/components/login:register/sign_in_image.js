import React from "react";
import { Link } from "react-router-dom";

class SignInImage extends React.Component {
  render() {
    return (
      <div className="signin-image">
        <figure>
          <img src="images/signin-image.jpg" alt="sing up image" />
        </figure>
        <Link to="/Signup" className="signup-image-link">
          Create an account
        </Link>
      </div>
    );
  }
}

export default SignInImage;
