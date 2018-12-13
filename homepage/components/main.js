import React from "react";
import HeaderWrapper from "./header_wrapper";
import Banner from "./banner";
import Portfolio from "./portfolio";
import Wrapper from "./wrapper";
import PageEnd from "./page_end";
import CopyRightFooter from "./copy_right_footer";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <HeaderWrapper />
        <Banner />
        <Portfolio />
        <Wrapper />
        <PageEnd />
        <CopyRightFooter />
      </div>
    );
  }
}

export default Main;
