import { Row, Col, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

export const MasamToNews = () => {
  return (
    <Row className="masamToNews">
      <Row className="headerTo">
        <h1>MASAM II төслийн тухай мэдээ мэдээлэл</h1>
        <Link href="/news">
          <a>
            <button>
              Мэдээ <ArrowRightOutlined />
            </button>
          </a>
        </Link>
      </Row>
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
    </Row>
  );
};
