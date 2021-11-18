import { Row, Col, Calendar } from "antd";
import React from "react";
import Slider from "react-slick";

export const Actions = () => {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: "linear",
  };
  return (
    <Row className="calendar">
      <Row className="titleCalendar">
        <h1>
          НИЙГМИЙН ЭРГЭХ ХАРИУЦЛАГА УЛААНБААТАР ХОТОД <h2>2021.11.11</h2>
        </h1>
      </Row>
      <Row className="bodyCalendar">
        <Col span={16}>
          <h1>Арга хэмжээ</h1>
          <p>
            Төслийн хэрэгжилтийг дэмжих зорилгоор дотоодын түншлэлийг бий болгох
          </p>
          <Slider {...settings}>
            <div>hello</div>
            <div>
              <img src="images/about/client.png" />
            </div>
            <div>
              <img src="images/about/client.png" />
            </div>
          </Slider>
        </Col>
        <Col span={8}>
          <div>
            <Calendar fullscreen={false} />
          </div>
        </Col>
      </Row>
    </Row>
  );
};
