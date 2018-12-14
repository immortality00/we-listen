import React from "react";
import TestimonialsRow from "./testimonials_row";

class TestimonialsContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <TestimonialsRow />
      </div>
    );
  }
}

export default TestimonialsContainer;
