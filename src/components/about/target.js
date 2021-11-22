import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../utils";

export const Target = ({ data }) => {
  const { title, content } = data;
  return (
    <Row className="target">
      <Col span={16}>
        <img src={getData(data._embedded, "image")} />
      </Col>
      <Col span={7}>
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Col>
    </Row>
  );
};
