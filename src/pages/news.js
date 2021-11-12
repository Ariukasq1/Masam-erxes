import Layout from "../components/layouts/Layout";
import React from "react";
import { NewsList } from "../components/news";

const News = () => {
  return (
    <Layout>
      <div className="page news">
        <NewsList />
      </div>
    </Layout>
  );
};
export default News;
