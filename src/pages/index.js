import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import Config from "../config";
import TextSlider from "../components/home/TextSlider";
import { Introduction } from "../components/home/Introduction";
import { Activity } from "../components/home/Activity";
import { Range } from "../components/home/Range";
import { MasamToNews } from "../components/home/MasamToNews";

// const wp = new WPAPI({ endpoint: Config.apiUrl });

class Index extends React.Component {
  // static async getInitialProps() {
  //   let apiMethod = wp.categories();

  //   const mainTabCategory = await apiMethod
  //     .parent(21)
  //     .embed();

  //   return { mainTabCategory };
  // }

  render() {
    return (
      <Layout>
        <div className="page home">
          <Introduction />
          <TextSlider />
          <Activity />
          <Range />
          <MasamToNews />
        </div>
      </Layout>
    );
  }
}

export default Index;
