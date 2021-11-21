import React from "react";
import { Col, Row } from "antd";
import { getData } from "../../utils";
import Slider from "react-slick";

const Partners = ({ partnersPosts, partnersCat }) => {
  const { name, description } = partnersCat;
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
  };
  return (
    <Col span={24} className="partnersList">
      <h1>{name}</h1>
      <p>{description}</p>
      <Slider {...settings}>
        {partnersPosts.map((logo, index) => {
          return (
            <a key={index} href={logo.acf.link}>
              <img src={getData(logo._embedded, "image")} />
            </a>
          );
        })}
      </Slider>
    </Col>
  );
};

export default Partners;
