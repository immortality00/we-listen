import React from "react";
import Banner from "./banner";
import Welcome from "./welcome";
import Featured from "./featured";
import CopyRight from "./copy_right";

class Main extends React.Component {
  render() {
    return (
      <div id="main">
        <Banner />
        <Welcome />
        <Featured />
        <CopyRight />
      </div>
    );
  }
}

export default Main;
