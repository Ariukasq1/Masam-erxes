import WPAPI from "wpapi";
import React from "react";
import Layout from "../components/layouts/Layout";
import Config from "../config";
import TextSlider from "../components/home/TextSlider";
import { Introduction } from "../components/home/Introduction";
import { Activity } from "../components/home/Activity";
import { Range } from "../components/home/Range";
import { MasamToNews } from "../components/home/MasamToNews";
import { Actions } from "../components/home/Actions";
import Slider from "react-slick";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({ introduction, partners, activity }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 12000,
    autoplaySpeed: 0,
    cssEase: "linear",
  };
  return (
    <div className="page home">
      <Introduction introduction={introduction} />
      <h3>Иргэн төр</h3>
      <Slider {...settings}>
        <span className="text">ОРОЛЦООТОЙ ИРГЭД</span>
        <span className="text">ХАРИУЦЛАГТАЙ ТӨР</span>
      </Slider>
      <Activity activity={activity} />
      <Range />
      <MasamToNews />
      <Actions />
      <TextSlider partner={partners} />
    </div>
  );
};

Index.getInitialProps = async () => {
  const introduction = await wp
    .posts()
    .slug("introduction")
    .embed()
    .then((data) => {
      return data[0];
    });
  const partners = await wp
    .posts()
    .slug("partnerlogos")
    .embed()
    .then((data) => {
      return data[0];
    });
  const activity = await wp
    .posts()
    .slug("activity")
    .embed()
    .then((data) => {
      return data[0];
    });

  return { introduction, partners, activity };
};

export default Index;
