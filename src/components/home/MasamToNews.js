import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

export const MasamToNews = () => {
  return (
    <Row className="masamToNews">
      <Row className="headerTo">
        <h1>MASAM II төслийн тухай мэдээ мэдээлэл</h1>
        <Button>
          Мэдээ <ArrowRightOutlined />
        </Button>
      </Row>
    </Row>
  );
};
