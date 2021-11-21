import Layout from "../components/layouts/Layout";
import React from "react";
import { Proj } from "../components/projects/Proj";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Projects = ({ projects }) => {
  return (
      <div className="page projects">
        <Proj projects={projects} />
      </div>
  );
};
Projects.getInitialProps = async () => {
  const projects = await wp
    .posts()
    .slug("projects")
    .embed()
    .then((data) => {
      return data[0];
    });

  return { projects };
};

export default Projects;
