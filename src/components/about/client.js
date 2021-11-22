import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../utils";

export const Clients = ({ data }) => {
  const { title, content } = data;
  return (
    <Row className="clients">
      <Col span={8}>
        <h2>{title.rendered}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Col>
      <Col span={15}>
        <img src={getData(data._embedded, "image")} />
      </Col>
    </Row>
  );
};
