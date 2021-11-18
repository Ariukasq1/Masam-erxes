import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import Config from "../config";
import TextSlider from "../components/home/TextSlider";
import { Introduction } from "../components/home/Introduction";
import { Activity } from "../components/home/Activity";
import { Range } from "../components/home/Range";
import { MasamToNews } from "../components/home/MasamToNews";
import { Actions } from "../components/home/Actions";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({ introduction }) => {
  return (
    <Layout>
      <div className="page home">
        <Introduction introduction={introduction} />
        <TextSlider />
        <Activity />
        <Range />
        <MasamToNews />
        <Actions />
      </div>
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const introduction = await wp
    .posts()
    .slug("introduction")
    .embed()
    .then((data) => {
      return data[0];
    });
  return { introduction };
};

export default Index;
