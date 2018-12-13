import React from "react";
import Wrapper1 from "./wrapper1";
import Wrapper2 from "./wrapper2";
import Wrapper3 from "./wrapper3";

class WrapperContainer extends React.Component {
  render() {
    return (
      <div id="three-column" className="container">
        <div>
          <span className="arrow-down" />
        </div>
        <Wrapper1 />
        <Wrapper2 />
        <Wrapper3 />
      </div>
    );
  }
}

export default WrapperContainer;
