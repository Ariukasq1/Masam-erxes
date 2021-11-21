import Layout from "../components/layouts/Layout";
import React from "react";
import WPAPI from "wpapi";
import Config from "../config";
import { Kbase } from "../components/knowledgeBase/Kbase";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Knowledgebase = ({
  knowledgeBase,
  knowledge,
  barimt1,
  barimt2,
  barimt3,
  barimtlast,
}) => {
  return (
    <Layout>
      <div className="page knowledgebase">
        <Kbase
          knowledgeBase={knowledgeBase}
          knowledge={knowledge}
          barimt1={barimt1}
          barimt2={barimt2}
          barimt3={barimt3}
          barimtlast={barimtlast}
        />
      </div>
    </Layout>
  );
};

Knowledgebase.getInitialProps = async () => {
  const knowledgeBase = await wp
    .posts()
    .slug("knowledgeBase")
    .embed()
    .then((data) => {
      return data[0];
    });

  const knowledge = await wp
    .posts()
    .slug("knowledge")
    .embed()
    .then((data) => {
      return data[0];
    });

  const barimt1 = await wp
    .posts()
    .slug("barimt1")
    .embed()
    .then((data) => {
      return data[0];
    });

  const barimt2 = await wp
    .posts()
    .slug("barimt2")
    .embed()
    .then((data) => {
      return data[0];
    });

  const barimt3 = await wp
    .posts()
    .slug("barimt3")
    .embed()
    .then((data) => {
      return data[0];
    });

  const barimtlast = await wp
    .posts()
    .slug("barimtlast")
    .embed()
    .then((data) => {
      return data[0];
    });

  return { knowledgeBase, knowledge, barimt1, barimt2, barimt3, barimtlast };
};

export default Knowledgebase;
