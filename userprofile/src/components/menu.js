import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <div id="menu">
        <ul>
          <li className="current_page_item">
            <a href="#" accessKey={1} title="true">
              Homepage
            </a>
          </li>
          <li>
            <a href="#" accessKey={2} title="true">
              Our Clients
            </a>
          </li>
          <li>
            <a href="#" accessKey={3} title="true">
              About Us
            </a>
          </li>
          <li>
            <a href="#" accessKey={4} title="true">
              Careers
            </a>
          </li>
          <li>
            <a href="#" accessKey={5} title="true">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;
