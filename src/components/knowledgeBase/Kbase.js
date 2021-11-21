import { Row, Col } from "antd";
import React from "react";
import getData from "../../utils";

export const Kbase = ({
  knowledgeBase,
  knowledge,
  barimt1,
  barimt2,
  barimt3,
  barimtlast,
}) => {
  console.log(knowledgeBase, "==========");
  console.log(knowledge, "aaaaaaaaaa");
  console.log(barimt1, "eeeeeeee");
  console.log(barimtlast, "aewwewewwe");

  return (
    <Row className="kbase">
      <div className="div-button">
        <button className="clicked" type="button">
          Хууль,эрх зүй
        </button>
        <button type="button">Судалгаа</button>
        <button type="button">Сургалт</button>
        <button type="button">Гарын авлага</button>
        <button type="button">Холбоотой цахим</button>
      </div>
      <Col span={15}>
        <p className="title">
          <b>{knowledgeBase.title.rendered}</b>
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: knowledgeBase.content.rendered,
          }}
        />
        <Row className="files-container">
          <Row gutter={8}>
            <Col span={8} className="files">
              <h4>{barimt1.title.rendered}</h4>
              <div className="center">
                <img src={getData(barimt1._embedded, "image")} />
                <a href="#" download>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: barimt1.content.rendered,
                    }}
                  />
                </a>
              </div>
            </Col>

            <Col span={8} className="files">
              <h4>{barimt2.title.rendered}</h4>
              <div className="center">
                <img src={getData(barimt2._embedded, "image")} />
                <a href="#" download>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: barimt2.content.rendered,
                    }}
                  />
                </a>
              </div>
            </Col>

            <Col span={8} className="files">
              <h4>{barimt3.title.rendered}</h4>
              <div className="center">
                <img src={getData(barimt3._embedded, "image")} />
                <a href="#" download>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: barimt3.content.rendered,
                    }}
                  />
                </a>
              </div>
            </Col>
          </Row>
          <p className="subtitle">
            <b>{knowledge.title.rendered}</b>
          </p>
          <div
            dangerouslySetInnerHTML={{
              __html: knowledge.content.rendered,
            }}
          />
          <Col span={15} className="lastFile">
            <h4>{barimtlast.title.rendered}</h4>
            <div className="center">
              <img src={getData(barimtlast._embedded, "image")} />
              <a href="#" download>
                <div
                  dangerouslySetInnerHTML={{
                    __html: barimtlast.content.rendered,
                  }}
                />
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
