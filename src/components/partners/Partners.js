import { Row, Col } from "antd";
import React from "react";
import getData from "../../utils";

export const Partner = ({
  partner_organizationsCat,
  partner_organizationsPosts,
  partners_orgCat,
  partners_orgPosts,
}) => {
  return (
    <Row className="partner">
      <Col span={24}>
        <h2>{partner_organizationsCat.name}</h2>
        <Row className="boxContainer">
          {partner_organizationsPosts.map((word, ind) => {
            return (
              <Col span={12} key={ind}>
                <div className="bigBox">
                  <img
                    src={getData(word._embedded, "image")}
                    className="headPic"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: word.content.rendered,
                    }}
                  />
                  <div className="nextButton">
                    <p>visit website</p>
                    <a href="#">
                      <img src="/images/home/Button.png" />
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>

        <h2>{partners_orgCat.name}</h2>
        <Row className="boxContainer">
          {partners_orgPosts.map((word, ind) => {
            return (
              <Col span={8} key={ind}>
                <div className="smallBox">
                  <img
                    src={getData(word._embedded, "image")}
                    className="headPic"
                  />
                  <div
                    dangerouslySetInnerHTML={{
                      __html: word.content.rendered,
                    }}
                  />
                  <div className="nextButton">
                    <p>visit website</p>
                    <a href="#">
                      <img src="/images/home/Button.png" />
                    </a>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
};
