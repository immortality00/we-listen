import React from "react";
import HeaderLogo from "./header_logo";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div id="header" className="container">
        <HeaderLogo />
      </div>
    );
  }
}

export default HeaderContainer;
