import React from "react";

class Image1 extends React.Component {
  render() {
    return (
      <div className="row no-gutters">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img"
          style={{
            backgroundImage:
              'url("img/beauty-black-background-black-dress-1435833.jpg")'
          }}
        />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Don't Get Suffocated with Issues!</h2>
          <p className="lead mb-0">
            Let us help you come up for air! Reach New Heights!
          </p>
        </div>
      </div>
    );
  }
}

export default Image1;
