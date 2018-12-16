import React from "react";

class Testimonial2 extends React.Component {
  render() {
    return (
      <div className="col-lg-4">
        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
          <img
            className="img-fluid rounded-circle mb-3"
            src="images/testimonials-2.jpg"
            alt="true"
          />
          <h5>Homer S.</h5>
          <p className="font-weight-light mb-0">
            "This platform has connected me with a coach and a friend that
            helped me battle my alcoholism and continue to support me. I have
            been sober over 99 days now."
          </p>
        </div>
      </div>
    );
  }
}

export default Testimonial2;
