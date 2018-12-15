import React, { Component } from "react";
import Navbar from "./components/navbar";
import MastHead from "./components/mast_head";
import Icon from "./components/icon";
import ImagesShowCase from "./components/images_show_case";
import Testimonials from "./components/testimonials";
import CallToAction from "./components/call_to_action";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <MastHead />
        <Icon />
        <ImagesShowCase />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    );
  }
}

export default App;
