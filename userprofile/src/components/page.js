import React from "react";
import Header from "./header";
import Main from "./main";

class Page extends React.Component {
  render() {
    return (
      <div id="page" className="container">
        <Header />
        <Main />
      </div>
    );
  }
}

export default Page;
