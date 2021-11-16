import Layout from "../components/layouts/Layout";
import React from "react";
import { Proj } from "../components/projects/Proj";

const Projects = () => {
  return (
    <Layout>
      <div className="page projects">
        <Proj />
      </div>
    </Layout>
  );
};
export default Projects;
