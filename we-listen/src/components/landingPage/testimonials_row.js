import React from "react";
import Testimonial1 from "./testimonial1";
import Testimonial2 from "./testimonial2";
import Testimonial3 from "./testimonial3";

class TestimonialsRow extends React.Component {
  render() {
    return (
      <div className="row">
        <Testimonial1 />
        <Testimonial2 />
        <Testimonial3 />
      </div>
    );
  }
}

export default TestimonialsRow;
