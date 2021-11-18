import React from "react";

const TextSlider = ({ partner }) => {
  const { title, content } = partner;
  console.log(partner, "============");
  return (
    <div className="slider">
      <h1>{title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      <div className="partners-logo">
        <img src="images/home/tunsh1.png" />
        <img src="images/home/tunsh2.png" />
        <img src="images/home/tunsh3.png" />
        <img src="images/home/tunsh4.png" />
      </div>
    </div>
  );
};

export default TextSlider;
