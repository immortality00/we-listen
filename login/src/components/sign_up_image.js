import React from "react";

class SignUpImage extends React.Component {
  render() {
    return (
      <div className="signup-image">
        <figure>
          <img src="images/signup-image.jpg" alt="sing up image" />
        </figure>
        <a href="#" className="signup-image-link">
          I am already member
        </a>
      </div>
    );
  }
}

export default SignUpImage;
