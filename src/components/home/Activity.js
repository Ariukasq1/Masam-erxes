import { Row, Col } from "antd";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export const Activity = () => {
  return (
    <div className="activity">
      <h2>Төслийн гол үйл ажиллагаа</h2>
      <Row>
        <Col span={18}>
          <div>
            <img src="images/home/image3.png" />
          </div>
          <p>Анхан шатны арүүл мэндийн үйлчилгээг мргэдэд ойртуулах нь</p>
          <p>
            Монгол улсын өнцөг булан бүрт үйлчилгээ үзүүлж буй анхан шатны эрүүл
            мэндийн байгууллагуудын мэдээллийг ил тод, ээлтэй хэлбэрээр хүргэн
            иргэдээс санал хүсэлт хүлээн авах үнэлгээ өгөх боломжийг
            бүрдүүлэхээр зорьж байна.
          </p>
          <button className="readMore">
            Дэлгэрэнгүй <ArrowRightOutlined />
          </button>
        </Col>
        <Col span={6}></Col>
      </Row>
      <div className="image">
        <img src="images/home/absolute1.png" />
      </div>
    </div>
  );
};
