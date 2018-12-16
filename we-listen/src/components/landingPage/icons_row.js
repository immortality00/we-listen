import React from "react";
import IconsFamous from "./icons_famous";
import IconsExperianced from "./icons_experianced";
import IconsKnowledgeable from "./icons_knowledgeable";

class IconsRow extends React.Component {
  render() {
    return (
      <div className="row">
        <IconsFamous />
        <IconsExperianced />
        <IconsKnowledgeable />
      </div>
    );
  }
}

export default IconsRow;
