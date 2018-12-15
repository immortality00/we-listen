import React from "react";

class SignInImage extends React.Component {
  render() {
    return (
      <div className="signin-image">
        <figure>
          <img src="images/signin-image.jpg" alt="sing up image" />
        </figure>
        <a href="#" className="signup-image-link">
          Create an account
        </a>
      </div>
    );
  }
}

export default SignInImage;
