import React from "react";

class Testimonial1 extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img
            className="img-fluid rounded-circle mb-3"
            src="img/tom_cruise.jpg"
            alt
          />
          <h5>Tom C.</h5>
          <p className="font-weight-light mb-0">
            "New inquiries to have a session with me has been non stop! The
            count of my social media followers has reached a new record."
          </p>
        </div>
      </div>
    );
  }
}

export default Testimonial1;
