import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../utils";

export const Structure = ({ data }) => {
  const { title, content } = data;
  return (
    <Row className="structure">
      <Col span={16}>
        <h3>{title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
      </Col>
      <Col span={8}></Col>
      <div className="image">
        <img src={getData(data._embedded, "image")} />
      </div>
    </Row>
  );
};
