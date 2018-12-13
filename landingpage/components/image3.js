import React from "react";

class Image3 extends React.Component {
  render() {
    return (
      <div className="row no-gutters">
        <div
          className="col-lg-6 order-lg-2 text-white showcase-img"
          style={{
            backgroundImage: 'url("img/beautiful-cute-face-1170654.jpg")'
          }}
        />
        <div className="col-lg-6 order-lg-1 my-auto showcase-text">
          <h2>Feel Liberated!</h2>
          <p className="lead mb-0">
            Appreciate more of what you have within and around you!
          </p>
        </div>
      </div>
    );
  }
}

export default Image3;
