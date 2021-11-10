import Layout from "../components/layouts/Layout";
import React from "react";
import { Kbase } from "../components/knowledgeBase/Kbase";
const Knowledgebase = () => {
  return (
    <Layout>
      <div className="page knowledgebase">
        <Kbase/>
      </div>
    </Layout>
  );
};
export default Knowledgebase;
