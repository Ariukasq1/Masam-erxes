import { Row, Col } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";

export const Activity = ({ activity }) => {
  const { title, content } = activity;
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };
  return (
    <div className="activity">
      <h2>Төслийн гол үйл ажиллагаа</h2>
      <Row>
        <Col span={18}>
          <div>
            <img src="images/home/image3.png" />
          </div>
          <p>{title.rendered}</p>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <button className="readMore">
            Дэлгэрэнгүй <ArrowRightOutlined />
          </button>
        </Col>
        <Col span={6}></Col>
      </Row>
      <Slider {...settings} className="image">
        <img src="images/home/absolute1.png" />
        <img src="images/home/absolute1.png" />
      </Slider>
    </div>
  );
};
