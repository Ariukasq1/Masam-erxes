import Layout from "../components/layouts/Layout";
import React from "react";
import { Proj } from "../components/projects/Proj";
import WPAPI from "wpapi";
import Config from "../config";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Projects = ({ projects, categories, buttonsCat, buttonsPosts }) => {
  console.log(categories);
  return (
    <div className="page projects">
      <Proj
        projects={projects}
        categories={categories}
        buttonsCat={buttonsCat}
        buttonsPosts={buttonsPosts}
      />
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

  const buttonsCat = await wp
    .categories()
    .slug("buttons")
    .embed()
    .then((data) => {
      return data[0];
    });
  const buttonsPosts = await wp
    .posts()
    .categories(buttonsCat.id)
    .embed()
    .perPage(21)
    .then((data) => {
      return data;
    });

  const categories = await wp.categories().parent(buttonsCat.id).embed();
  return { projects, categories, buttonsCat, buttonsPosts };
};

export default Projects;
