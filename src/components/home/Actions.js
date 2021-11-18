import { Row, Col, Calendar } from "antd";
import React from "react";

export const Actions = () => {
  return (
    <Row className="calendar">
      <Row className="titleCalendar">
        <h1>
          НИЙГМИЙН ЭРГЭХ ХАРИУЦЛАГА УЛААНБААТАР ХОТОД <h2>2021.11.11</h2>
        </h1>
      </Row>
      <Row className="bodyCalendar">
        <Col span={16}>
          <h1>Арга хэмжээ</h1>
          <p>
            Төслийн хэрэгжилтийг дэмжих зорилгоор дотоодын түншлэлийг бий болгох
          </p>
        </Col>
        <Col span={8}>
          <div>
            <Calendar fullscreen={false} />
          </div>
        </Col>
      </Row>
    </Row>
  );
};
