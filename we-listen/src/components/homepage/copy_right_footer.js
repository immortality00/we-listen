import React from "react";

class CopyRightFooter extends React.Component {
  render() {
    return (
      <div id="copyright" className="container">
        <p>
          © Untitled. All rights reserved. | Photos by
          <a href="http://fotogrph.com/">Fotogrph</a> | Design by
          <a href="http://templated.co" rel="nofollow">
            TEMPLATED
          </a>
          .
        </p>
        <ul className="contact">
          <li>
            <a href="#" className="icon icon-twitter">
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon icon-facebook">
              <span />
            </a>
          </li>
          <li>
            <a href="#" className="icon icon-dribbble">
              <span>Pinterest</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon icon-tumblr">
              <span>Google+</span>
            </a>
          </li>
          <li>
            <a href="#" className="icon icon-rss">
              <span>Pinterest</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CopyRightFooter;
