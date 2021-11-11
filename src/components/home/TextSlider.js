import React, { Component } from "react";

export default class TextSlider extends Component {
  render() {
    return (
      <div className="slider">
        <h3>Иргэн төр</h3>
        <div className="flowing">ХАРИУЦЛАГТАЙ ТӨР</div>
        <h1>Хэрэгжүүлэгч түнш байгууллагууд</h1>
        <p>
          Төслийн хэрэгжилтийг дэмжих зорилгоор дотоодын түншлэлийг бий болгох
        </p>
        <div className="partners-logo">
          <img src="images/home/tunsh1.png" />
          <img src="images/home/tunsh2.png" />
          <img src="images/home/tunsh3.png" />
          <img src="images/home/tunsh4.png" />
        </div>
      </div>
    );
  }
}
