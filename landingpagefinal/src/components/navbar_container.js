import React from "react";
import { Link } from "react-router-dom";

class NavbarContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <a className="navbar-brand" href="#">
          WE LISTEN
        </a>
        <a class="btn btn-primary" href="#">
          Sign In
        </a>
      </div>
    );
  }
}

export default NavbarContainer;
