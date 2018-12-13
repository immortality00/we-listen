import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <ul>
          <li className="current_page_item">
            <a href="#" accessKey={1} title>
              Homepage
            </a>
          </li>
          <li>
            <a href="#" accessKey={2} title>
              Our Clients
            </a>
          </li>
          <li>
            <a href="#" accessKey={3} title>
              About Us
            </a>
          </li>
          <li>
            <a href="#" accessKey={4} title>
              Careers
            </a>
          </li>
          <li>
            <a href="#" accessKey={5} title>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
