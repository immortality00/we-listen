import React from "react";
import Overlay from "./overlay";
import MastHeadContainer from "./mast_head_container";

class MastHead extends React.Component {
  render() {
    return (
      <header className="masthead text-white text-center">
        <Overlay />
        <MastHeadContainer />
      </header>
    );
  }
}

export default MastHead;
