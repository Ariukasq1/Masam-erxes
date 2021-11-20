import Layout from "../components/layouts/Layout";
import React from "react";
import { Col, Row } from "antd";
import {
  FacebookFilled,
  TwitterCircleFilled,
  YoutubeFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";

const Contact = () => {
  return (
    <Row className="page contact">
      <Col span={6}>
        <h4>Холбоо барих</h4>
        <p>
          Сүхбаатар дүүрэг усны гудамж - 4 Улаанбаатар 14215 Төв банкны байр
        </p>
        <Row className="socialLinks">
          <FacebookFilled />
          <TwitterCircleFilled />
          <YoutubeFilled />
          <LinkedinFilled />
          <InstagramFilled />
        </Row>
      </Col>
      <Col span={6}>
        <h4>Цахим банк</h4>
        <p>
          Сүхбаатар дүүрэг усны гудамж - 4 Улаанбаатар 14215 Төв банкны байр
        </p>
      </Col>
      <Col span={6}>
        <h4>Бусад цэс</h4>
        <p>
          Сүхбаатар дүүрэг усны гудамж - 4 Улаанбаатар 14215 Төв банкны байр
        </p>
      </Col>
      <Col span={6}>
        <h4>Тусламж</h4>
        <p>
          Сүхбаатар дүүрэг усны гудамж - 4 Улаанбаатар 14215 Төв банкны байр
        </p>
      </Col>
    </Row>
  );
};
export default Contact;
