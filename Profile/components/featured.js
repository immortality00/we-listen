import React from "react";

class Featured extends React.Component {
  render() {
    return (
      <div id="featured">
        <div className="title">
          <h2>Maecenas lectus sapien</h2>
          <span className="byline">Integer sit amet aliquet pretium</span>
        </div>
        <ul className="style1">
          <li className="first">
            <p className="date">
              <a href="#">
                Jan<b>05</b>
              </a>
            </p>
            <h3>Amet sed volutpat mauris</h3>
            <p>
              <a href="#">
                Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis
                eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at
                nisl. Nullam non wisi a sem semper eleifend. Etiam non felis.
                Donec ut ante.
              </a>
            </p>
          </li>
          <li>
            <p className="date">
              <a href="#">
                Jan<b>03</b>
              </a>
            </p>
            <h3>Sagittis diam dolor amet</h3>
            <p>
              <a href="#">
                Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus
                turpis, cursus egestas at sem. Mauris quam enim, molestie. Donec
                leo, vivamus fermentum nibh in augue praesent congue rutrum.
              </a>
            </p>
          </li>
          <li>
            <p className="date">
              <a href="#">
                Jan<b>01</b>
              </a>
            </p>
            <h3>Amet sed volutpat mauris</h3>
            <p>
              <a href="#">
                Consectetuer adipiscing elit. Nam pede erat, porta eu, lobortis
                eget, tempus et, tellus. Etiam neque. Vivamus consequat lorem at
                nisl. Nullam non wisi a sem semper eleifend. Etiam non felis.
                Donec ut ante.
              </a>
            </p>
          </li>
          <li>
            <p className="date">
              <a href="#">
                Dec<b>31</b>
              </a>
            </p>
            <h3>Sagittis diam dolor amet</h3>
            <p>
              <a href="#">
                Etiam non felis. Donec ut ante. In id eros. Suspendisse lacus
                turpis, cursus egestas at sem. Mauris quam enim, molestie. Donec
                leo, vivamus fermentum nibh in augue praesent congue rutrum.
              </a>
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Featured;
