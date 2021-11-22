import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../utils";

export const IntroAbout = ({ data }) => {
  const { title, content } = data;
  return (
    <Row className="IntroAbout">
      <Col span={14}>
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Col>
      <Col span={10}>
        <img src={getData(data._embedded, "image")} />
      </Col>
    </Row>
  );
};
