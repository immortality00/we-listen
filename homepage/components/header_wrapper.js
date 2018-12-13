import React from "react";
import HeaderContainer from "./header_container";
import MenuWrapper from "./menu_wrapper";

class HeaderWrapper extends React.Component {
  render() {
    return (
      <div id="header-wrapper">
        <HeaderContainer />
        <MenuWrapper />
      </div>
    );
  }
}

export default HeaderWrapper;
