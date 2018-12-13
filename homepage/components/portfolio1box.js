import React from "react";

class Portfolio1Box extends React.Component {
  render() {
    return (
      <div className="box">
        <a href="#">
          <img src="images/scr01.jpg" alt className="image image-full" />
        </a>
        <h3>Vestibulum venenatis</h3>
        <p>Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
        <a href="#" className="button button-small">
          Etiam posuere
        </a>
      </div>
    );
  }
}

export default Portfolio1Box;
