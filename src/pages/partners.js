import Layout from "../components/layouts/Layout";
import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import { Partner } from "../components/partners/Partners";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Partners = ({
  partners,
  bigBox1,
  bigBox2,
  bigBox3,
  bigBox4,
  smallbox1,
  smallbox2,
  smallbox3,
  smallbox4,
  smallbox5,
  smallbox6,
}) => {
  return (
      <div className="page partners">
        <Partner
          partners={partners}
          bigBox1={bigBox1}
          bigBox2={bigBox2}
          bigBox3={bigBox3}
          bigBox4={bigBox4}
          smallbox1={smallbox1}
          smallbox2={smallbox2}
          smallbox3={smallbox3}
          smallbox4={smallbox4}
          smallbox5={smallbox5}
          smallbox6={smallbox6}
        />
      </div>

  );
};

Partners.getInitialProps = async () => {
  const partners = await wp
    .posts()
    .slug("partners")
    .embed()
    .then((data) => {
      return data[0];
    });
  const bigBox1 = await wp
    .posts()
    .slug("bigBox1")
    .embed()
    .then((data) => {
      return data[0];
    });
  const bigBox2 = await wp
    .posts()
    .slug("bigBox2")
    .embed()
    .then((data) => {
      return data[0];
    });
  const bigBox3 = await wp
    .posts()
    .slug("bigBox3")
    .embed()
    .then((data) => {
      return data[0];
    });
  const bigBox4 = await wp
    .posts()
    .slug("bigBox4")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox1 = await wp
    .posts()
    .slug("smallbox1")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox2 = await wp
    .posts()
    .slug("smallbox2")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox3 = await wp
    .posts()
    .slug("smallbox3")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox4 = await wp
    .posts()
    .slug("smallbox4")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox5 = await wp
    .posts()
    .slug("smallbox5")
    .embed()
    .then((data) => {
      return data[0];
    });
  const smallbox6 = await wp
    .posts()
    .slug("smallbox6")
    .embed()
    .then((data) => {
      return data[0];
    });

  return {
    partners,
    bigBox1,
    bigBox2,
    bigBox3,
    bigBox4,
    smallbox1,
    smallbox2,
    smallbox3,
    smallbox4,
    smallbox5,
    smallbox6,
  };
};

export default Partners;
