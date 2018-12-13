import React from "react";
import ActionText from "./action_text";
import ActionSignUp from "./action_sign_up";

class ActionRow extends React.Component {
  render() {
    return (
      <div className="row">
        <ActionText />
        <ActionSignUp />
      </div>
    );
  }
}

export default ActionRow;
