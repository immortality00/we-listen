import React from "react";

class IconsFamous extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
          <div className="features-icons-icon d-flex">
            <i className="icon-star m-auto text-primary" />
          </div>
          <h3>Famous? Yes.</h3>
          <p className="lead mb-0">
            Our trusted directory of our Coaches contains many famous people.
          </p>
        </div>
      </div>
    );
  }
}

export default IconsFamous;
