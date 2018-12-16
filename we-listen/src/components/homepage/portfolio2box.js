import React from "react";

class Portfolio2Box extends React.Component {
  render() {
    return (
      <div className="box">
        <a href="#">
          <img src="images/scr02.jpg" alt="true" className="image image-full" />
        </a>
        <h3>Praesent scelerisque</h3>
        <p>Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
        <a href="#" className="button button-small">
          Etiam posuere
        </a>
      </div>
    );
  }
}

export default Portfolio2Box;
