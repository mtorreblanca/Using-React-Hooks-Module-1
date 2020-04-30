import React from "react";
import ImageToggleOnMouseOver from "../src/ImageToggleOnMouseOver";
const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver
        primaryImg="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
        secondaryImg="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
        alt=""
      />
      &nbsp;
      <ImageToggleOnMouseOver
        primaryImg="https://homepages.cae.wisc.edu/~ece533/images/arctichare.png"
        secondaryImg="https://homepages.cae.wisc.edu/~ece533/images/airplane.png"
        alt=""
      />
    </div>
  );
};

export default ImageChangeOnMouseOver;
