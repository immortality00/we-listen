import React from "react";
import ActionOverlay from "./action_overlay";
import ActionContainer from "./action_container";

class CallToAction extends React.Component {
  render() {
    return (
      <section className="call-to-action text-white text-center">
        <ActionOverlay />
        <ActionContainer />
      </section>
    );
  }
}

export default CallToAction;
