import React from "react";
import ContainerText from "./container_text";
import ContainerSignUp from "./container_sign_up";

class ContainerRow extends React.Component {
  render() {
    return (
      <div className="row">
        <ContainerText />
        <ContainerSignUp />
      </div>
    );
  }
}

export default ContainerRow;
