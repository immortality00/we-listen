import React from "react";

class portfolio3Box extends React.Component {
  render() {
    return (
      <div className="box">
        <a href="#">
          <img src="images/scr03.jpg" alt className="image image-full" />
        </a>
        <h3>Donec dictum metus</h3>
        <p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
        <a href="#" className="button button-small">
          Etiam posuere
        </a>
      </div>
    );
  }
}

export default portfolio3Box;
