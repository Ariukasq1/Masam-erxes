import { Row, Col } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import Link from "next/link";
import { getData, activePage } from "../../utils";

export const Introduction = ({ introduction }) => {
  const { title, content } = introduction;

  return (
    <Row className="introduction">
      <Col span={12}>
        <p>{title.rendered}</p>
        <div dangerouslySetInnerHTML={{ __html: content.rendered }} />
        <Link href="/about">
          <a>
            <button className="readMore">
              MASAM II танилцуулга <ArrowRightOutlined />
            </button>
          </a>
        </Link>
      </Col>
      <Col span={12}>
        <img src={getData(introduction._embedded, "image")} />
      </Col>
    </Row>
  );
};
