import React from "react";
import { MasamToNews } from "../components/home/MasamToNews";
import { NewsList } from "../components/news";
import { Row } from "antd";

const News = () => {
  return (
    <div className="page news">
      <NewsList />
      <Row className="masamToNews">
        <MasamToNews />
      </Row>
    </div>
  );
};
export default News;
