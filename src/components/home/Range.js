import { Row, Col } from "antd";
import React, { useEffect } from "react";

export const Range = ({ rangeInfo }) => {
  const { acf, title } = rangeInfo;
  useEffect(() => {
    const text = document.querySelector(".circleText");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const element = text.querySelectorAll("span");
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = "rotate(" + i * 9 + "deg)";
    }
  });
  return (
    <Row className="range">
      <section>
        <p className="circleText">{title.rendered}</p>
        <div className="circleCenter"></div>
      </section>
      <div>
        <h1>{acf.aimag}</h1>
        <p>Аймаг</p>
      </div>
      <div>
        <h1>{acf.scope}</h1>
        <p>Цар хүрээ</p>
      </div>
      <div>
        <h1>{acf.investment}</h1>
        <p>Хөрөнгө оруулалт</p>
      </div>
      <div>
        <h1>{acf.organization}</h1>
        <p>Олон нийтийн байгууллага</p>
      </div>
    </Row>
  );
};
