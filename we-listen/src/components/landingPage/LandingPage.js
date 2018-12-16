import React from "react";
import Navbar from "./navbar";
import MastHead from "./mast_head";
import Icon from "./icon";
import ImagesShowCase from "./images_show_case";
import Testimonials from "./testimonials";
import CallToAction from "./call_to_action";
import Footer from "./footer";

class LandingPage extends React.Component {
  render() {
    return (
      <div className="Main">
        {}
        <Navbar />
        {}
        <MastHead />
        {}
        <Icon />
        {}
        <ImagesShowCase />
        {}
        <Testimonials />
        {}
        <CallToAction />
        {}
        <Footer />
        {}
      </div>
    );
  }
}

export default LandingPage;
