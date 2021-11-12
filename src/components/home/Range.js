import { Row, Col } from "antd";
import React, { useEffect } from "react";

export const Range = () => {
  useEffect(() => {
    const text = document.querySelector(".circleText");
    text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");
    const element = text.querySelectorAll("span");
    for (let i = 0; i < element.length; i++) {
      element[i].style.transform = "rotate(" + i * 9.4 + "deg)";
    }
  });
  return (
    <Row className="range">
      <section>
        <p className="circleText">
          Хэрэгжилтийн # цар хүрээний # товч # мэдээлэл
        </p>
        <div className="circleCenter"></div>
      </section>
      <div>
        <h1>21</h1>
        <p>Аймаг</p>
      </div>
      <div>
        <h1>2023</h1>
        <p>Цар хүрээ</p>
      </div>
      <div>
        <h1>$2.4mil</h1>
        <p>Хөрөнгө оруулалт</p>
      </div>
      <div>
        <h1>11</h1>
        <p>Олон нийтийн байгууллага</p>
      </div>
    </Row>
  );
};
