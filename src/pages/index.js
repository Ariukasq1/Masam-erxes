import WPAPI from "wpapi";
import React from "react";
import Config from "../config";
import TextSlider from "../components/home/Partners";
import { Introduction } from "../components/home/Introduction";
import { Activity } from "../components/home/Activity";
import { Range } from "../components/home/Range";
import { MasamToNews } from "../components/home/MasamToNews";
import { Actions } from "../components/home/Actions";
import Slider from "react-slick";
import { Row, Col } from "antd";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import Partners from "../components/home/Partners";

const wp = new WPAPI({ endpoint: Config.apiUrl });

const Index = ({
  introduction,
  activity,
  activityCat,
  rangeInfo,
  masamToNews,
  actionsTitle,
  actionsCat,
  actionsPosts,
  partnersCat,
  partnersPosts,
  irgenTurCat,
  irgenTurPosts,
  activityGallery,
  allNewsPosts,
}) => {
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
      <h3>{irgenTurCat.name}</h3>
      <Slider {...settings} className="textSlider">
        {irgenTurPosts.map((word, ind) => {
          return (
            <span key={ind} className="text">
              {word.title.rendered}
            </span>
          );
        })}
      </Slider>
      <Activity
        activity={activity}
        activityCat={activityCat}
        activityGallery={activityGallery}
      />
      <Range rangeInfo={rangeInfo} />
      <Col span={24} className="masamToNews">
        <Row className="headerTo">
          <h1>{masamToNews.name}</h1>
          <Link href="/news">
            <a>
              <button>
                Мэдээ <ArrowRightOutlined />
              </button>
            </a>
          </Link>
        </Row>
        <MasamToNews posts={allNewsPosts} />
      </Col>
      <Actions
        actionsTitle={actionsTitle}
        actionsCat={actionsCat}
        actionsPosts={actionsPosts}
      />
      <Partners partnersCat={partnersCat} partnersPosts={partnersPosts} />
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
  const irgenTurCat = await wp
    .categories()
    .slug("irgen_tur")
    .embed()
    .then((data) => {
      return data[0];
    });
  const irgenTurPosts = await wp
    .posts()
    .categories(irgenTurCat.id)
    .embed()
    .perPage(100)
    .then((data) => {
      return data;
    });

  const activityCat = await wp
    .categories()
    .slug("activityCat")
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
  const actGalleryCat = await wp
    .categories()
    .slug("gallery")
    .embed()
    .then((data) => {
      return data[0];
    });
  const activityGallery = await wp
    .posts()
    .categories(actGalleryCat.id)
    .embed()
    .then((data) => {
      return data;
    });
  const rangeInfo = await wp
    .posts()
    .slug("range")
    .embed()
    .then((data) => {
      return data[0];
    });

  const masamToNews = await wp
    .categories()
    .slug("masamToNews")
    .embed()
    .then((data) => {
      return data[0];
    });

  const actionsTitle = await wp
    .posts()
    .slug("actions_title")
    .embed()
    .then((data) => {
      return data[0];
    });

  const actionsCat = await wp
    .categories()
    .slug("actions_cat")
    .embed()
    .then((data) => {
      return data[0];
    });
  const actionsPosts = await wp
    .posts()
    .categories(actionsCat.id)
    .embed()
    .perPage(100)
    .then((data) => {
      return data;
    });

  const partnersCat = await wp
    .categories()
    .slug("partners_cat")
    .embed()
    .then((data) => {
      return data[0];
    });
  const partnersPosts = await wp
    .posts()
    .categories(partnersCat.id)
    .embed()
    .perPage(100)
    .then((data) => {
      return data;
    });
  const allNews = await wp
    .categories()
    .slug("news")
    .embed()
    .then((data) => {
      return data[0];
    });
  const allNewsPosts = await wp
    .posts()
    .categories(allNews.id)
    .embed()
    .perPage(4)
    .then((data) => {
      return data;
    });

  return {
    introduction,
    partnersCat,
    partnersPosts,
    activity,
    activityCat,
    rangeInfo,
    masamToNews,
    actionsTitle,
    actionsCat,
    actionsPosts,
    irgenTurCat,
    irgenTurPosts,
    activityGallery,
    allNewsPosts,
  };
};

export default Index;
