import Layout from "../components/layouts/Layout";
import React from "react";
import { Clients } from "../components/about/client";
import { Direction } from "../components/about/direction";
import { IntroAbout } from "../components/about/intro";
import { Structure } from "../components/about/structure";
import { Target } from "../components/about/target";

const About = () => {
  return (
    <Layout>
      <div className="page about">
        <IntroAbout />
        <Target />
        <Structure />
        <Clients />
        <Direction />
      </div>
    </Layout>
  );
};
export default About;
