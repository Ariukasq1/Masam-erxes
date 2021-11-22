import WPAPI from "wpapi";
import Config from "../config";
import React from "react";
import { Clients } from "../components/about/client";
import { Direction } from "../components/about/direction";
import { IntroAbout } from "../components/about/intro";
import { Structure } from "../components/about/structure";
import { Target } from "../components/about/target";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const About = ({ projectsPosts }) => {
  return (
    <div className="page about">
      <IntroAbout data={projectsPosts[4]} />
      <Target data={projectsPosts[3]} />
      <Structure data={projectsPosts[2]} />
      <Clients data={projectsPosts[1]} />
      <Direction data={projectsPosts[0]} />
    </div>
  );
};
export default About;

About.getInitialProps = async () => {
  const projectsCat = await wp
    .categories()
    .slug("about")
    .embed()
    .then((data) => {
      return data[0];
    });
  const projectsPosts = await wp
    .posts()
    .categories(projectsCat.id)
    .embed()
    .then((data) => {
      return data;
    });

  return { projectsPosts };
};
