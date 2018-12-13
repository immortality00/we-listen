import React from "react";
import Image1 from "./image1";
import Image2 from "./image2";
import Image3 from "./image3";

class ImagesContainer extends React.Component {
  render() {
    return (
      <div className="container-fluid p-0">
        <Image1 />
        <Image2 />
        <Image3 />
      </div>
    );
  }
}

export default ImagesContainer;
