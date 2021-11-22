import { Row, Col } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import Slider from "react-slick";
import { getData } from "../../utils";

export const Activity = ({ activity, activityCat, activityGallery }) => {
  const { title, content, acf } = activity;
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
    <Col span={24} className="activity">
      <h2>{activityCat.name}</h2>
      <Row>
        <Col span={18}>
          <div>
            <img src={getData(activity._embedded, "image")} />
          </div>
          <p>{title.rendered}</p>
          <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
          <a href={acf.link}>
            <button className="readMore">
              Дэлгэрэнгүй <ArrowRightOutlined />
            </button>
          </a>
        </Col>
        <Col span={6}></Col>
      </Row>
      <Slider {...settings} className="activitySlider">
        {activityGallery.map((img, ind) => {
          return <img key={ind} src={getData(img._embedded, "image")} />;
        })}
      </Slider>
    </Col>
  );
};
