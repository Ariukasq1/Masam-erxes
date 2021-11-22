import React from "react";
import { Row, Col } from "antd";
import { getData } from "../../utils";

export const Direction = ({ data }) => {
  const { title, content } = data;
  return (
    <Col className="direction">
      <div className="image">
        <img src={getData(data._embedded, "image")} />
      </div>
      <h2>{title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </Col>
  );
};
