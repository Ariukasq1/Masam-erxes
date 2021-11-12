import { Row, Col, Dropdown, Button, Menu } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import React from "react";
const menu = (
  <Menu>
    <Menu.Item>Влог</Menu.Item>
    <Menu.Item>Мэдээ</Menu.Item>
    <Menu.Item>Төслүүд</Menu.Item>
  </Menu>
);
export const NewsList = () => {
  return (
    <div className="newsList">
      <Row className="headerNews">
        <h1>Сүүлийн үеийн мэдээ мэдээлэл</h1>
        <Dropdown overlay={menu} placement="bottomLeft">
          <Button>
            <FilterOutlined />
            Бүх мэдээ
          </Button>
        </Dropdown>
      </Row>
    </div>
  );
};
