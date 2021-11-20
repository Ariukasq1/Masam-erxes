import { Row, Col, Calendar } from "antd";
import React from "react";
import Slider from "react-slick";
import { getData } from "../../utils";

export const Actions = ({ actionsTitle, actionsCat, actionsPosts }) => {
  const { content, title } = actionsTitle;
  const { name, description } = actionsCat;
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
  };
  return (
    <Col span={24} className="calendar">
      <Col span={24} className="calTitle">
        <h1>{title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Col>
      <Row className="bodyCalendar">
        <Col span={16}>
          <h1>{name}</h1>
          <p>{description}</p>
          <Slider {...settings} className="actionsSlider">
            {actionsPosts.map((post, index) => {
              return (
                <div key={index} className="postActions">
                  <img
                    className="overlayImage"
                    src={getData(post._embedded, "image")}
                  />
                  <p className="overlayText">{post.title.rendered}</p>
                </div>
              );
            })}
          </Slider>
        </Col>
        <Col span={8}>
          <Calendar fullscreen={false} />
        </Col>
      </Row>
    </Col>
  );
};
