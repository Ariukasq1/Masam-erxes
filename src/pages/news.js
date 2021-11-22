import React from "react";
import { MasamToNews } from "../components/home/MasamToNews";
import { NewsList } from "../components/news";
import { Row } from "antd";
import WPAPI from "wpapi";
import Config from "../config";
import { NewsPart } from "../components/news/newsPart";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const News = ({ allNewsPosts }) => {
  return (
    <div className="page news">
      <NewsList />
      <Row className="masamToNews">
        <MasamToNews posts={allNewsPosts} />
      </Row>
      <NewsPart posts={allNewsPosts} />
    </div>
  );
};

News.getInitialProps = async () => {
  const allNews = await wp
    .categories()
    .slug("news")
    .embed()
    .then((data) => {
      return data[0];
    });
  const allNewsPosts = await wp
    .posts()
    .categories(allNews.id)
    .embed()
    .perPage(15)
    .then((data) => {
      return data;
    });
  return { allNewsPosts };
};

export default News;
