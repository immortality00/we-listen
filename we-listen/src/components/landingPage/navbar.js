import React from "react";
import NavbarContainer from "./navbar_container";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light static-top">
        <NavbarContainer />
      </nav>
    );
  }
}

export default Navbar;
