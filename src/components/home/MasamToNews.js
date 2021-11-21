import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";

export const MasamToNews = () => {
  return (
    <Row className="newsTo" gutter={16}>
      <Col span={12}>
        <div></div>
      </Col>
      <Col span={12}>
        <Row gutter={16}>
          <Col span={12}>
            <div></div>
          </Col>
          <Col span={12}>
            <div></div>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <div></div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
