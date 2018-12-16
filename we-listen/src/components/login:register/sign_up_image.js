import React from "react";
import { Link } from "react-router-dom";

class SignUpImage extends React.Component {
  render() {
    return (
      <div className="signup-image">
        <figure>
          <img src="images/signup-image.jpg" alt="sing up image" />
        </figure>
        <Link to="login" clLinkssName="signup-image-link">
          I am already member
        </Link>
      </div>
    );
  }
}

export default SignUpImage;
