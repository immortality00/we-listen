import React from "react";

class PageEndContainer extends React.Component {
  render() {
    return (
      <div id="page" className="container">
        <div className="title">
          <h2>Welcome to our website</h2>
        </div>
        <p>
          This is <strong>Picturesque</strong>, a free, fully
          standards-compliant CSS template designed by
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
      </div>
    );
  }
}

export default PageEndContainer;
