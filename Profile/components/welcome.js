import React from "react";

class Welcome extends React.Component {
  render() {
    return (
      <div id="welcome">
        <div className="title">
          <h2>Fusce ultrices fringilla metus</h2>
          <span className="byline">
            Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna
            congue
          </span>
        </div>
        <p>
          This is <strong>Privy</strong>, a free, fully standards-compliant CSS
          template designed by
          <a href="http://templated.co" rel="nofollow">
            TEMPLATED
          </a>
          . The photos in this template are from
          <a href="http://fotogrph.com/"> Fotogrph</a>. This free template is
          released under the
          <a href="http://templated.co/license">Creative Commons Attribution</a>
          license, so you're pretty much free to do whatever you want with it
          (even use it commercially) provided you give us credit for it. Have
          fun :)
        </p>
        <ul className="actions">
          <li>
            <a href="#" className="button">
              Etiam posuere
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Welcome;
