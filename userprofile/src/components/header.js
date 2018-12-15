import React from "react";
import Logo from "./logo";
import Menu from "./menu";

class Header extends React.Component {
  render() {
    return (
      <div id="header">
        <Logo />
        <Menu />
      </div>
    );
  }
}

export default Header;
