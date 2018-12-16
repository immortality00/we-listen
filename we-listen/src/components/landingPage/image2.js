import React from "react";

class Image2 extends React.Component {
  render() {
    return (
      <div className="row no-gutters">
        <div
          className="col-lg-6 text-white showcase-img"
          style={{
            backgroundImage: 'url("images/blur-bright-bulbs-131023.jpg")'
          }}
        />
        <div className="col-lg-6 my-auto showcase-text">
          <h2>You are Not Alone!</h2>
          <p className="lead mb-0">
            Share your ideas, your passion, and your questions freely!
          </p>
        </div>
      </div>
    );
  }
}

export default Image2;
