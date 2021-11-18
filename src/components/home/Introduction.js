import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";

export const Introduction = ({ introduction }) => {
  console.log(introduction, "==========");
  return (
    <Row className="introduction">
      <Col span={12}>
        <p>{introduction.title.rendered}</p>
        <div
          dangerouslySetInnerHTML={{ __html: introduction.content.rendered }}
        />
        <Link href="/about">
          <a>
            <button>
              MASAM II танилцуулга <ArrowRightOutlined />
            </button>
          </a>
        </Link>
      </Col>
      <Col span={12}>
        <img src="images/home/image1.png" />
      </Col>
    </Row>
  );
};
