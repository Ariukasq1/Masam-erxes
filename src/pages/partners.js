import Layout from "../components/layouts/Layout";
import React from "react";
import { Partner } from "../components/partners/Partners";

const Partners = () => {
  return (
    <Layout>
      <div className="page partners">Partners page</div>
      <Partner />
    </Layout>
  );
};
export default Partners;
