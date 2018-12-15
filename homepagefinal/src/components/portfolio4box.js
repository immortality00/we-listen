import React from "react";

class Portfolio4Box extends React.Component {
  render() {
    return (
      <div className="box">
        <a href="#">
          <img src="images/scr04.jpg" alt="true" className="image image-full" />
        </a>
        <h3>Mauris vulputate dolor</h3>
        <p>Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
        <a href="#" className="button button-small">
          Etiam posuere
        </a>
      </div>
    );
  }
}

export default Portfolio4Box;
