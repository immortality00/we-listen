import React from "react";
import { Link } from "react-router-dom";

class NavbarContainer extends React.Component {
  render() {
    return (
      <div className="container">
        <a className="navbar-brand" href="#">
          WE LISTEN
        </a>
        <Link to="/login" className="btn btn-primary">
          Sign In
        </Link>
      </div>
    );
  }
}

export default NavbarContainer;
