import { Row, Col } from "antd";
import React, { useState } from "react";
import getData from "../../utils";
import { Collapse } from "antd";
const { Panel } = Collapse;

export const Kbase = ({
  knowledgeBase,
  knowledge,
  barimt1,
  barimt2,
  barimt3,
  barimtlast,
}) => {
  const [state, setState] = useState("erhZuin");
  let menu;
  switch (state) {
    case "erhZuin":
      menu = (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"} ghost>
          <Panel
            className="panel"
            header={knowledgeBase.title.rendered}
            key="1"
          >
            <Row>
              <Col span={18}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: knowledgeBase.content.rendered,
                  }}
                />
                <Row className="files-container">
                  <Row>
                    <Col span={6} className="files">
                      <p>
                        <b>{barimt1.title.rendered}</b>
                      </p>
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

                    <Col span={6} className="files">
                      <p>
                        <b>{barimt2.title.rendered}</b>
                      </p>
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

                    <Col span={6} className="files">
                      <p>
                        <b>{barimt3.title.rendered}</b>
                      </p>
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
                  <Col span={12} className="lastFile">
                    <p>
                      <b>{barimtlast.title.rendered}</b>
                    </p>
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
          </Panel>
        </Collapse>
      );
      break;
    case "sudalgaa":
      menu = (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"} ghost>
          <Panel
            className="panel"
            header="Судалгаа"
            key="1"
          ></Panel>
        </Collapse>
      );
      break;
    case "surgalt":
      menu = (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"} ghost>
          <Panel
            className="panel"
            header="Сургалт"
            key="1"
          ></Panel>
        </Collapse>
      );
      break;
    case "gariinAvlaga":
      menu = (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"} ghost>
          <Panel
            className="panel"
            header="Гарийн авлага"
            key="1"
          ></Panel>
        </Collapse>
      );
      break;
    case "holbootoiTsahimHuudsuud":
      menu = (
        <Collapse defaultActiveKey={["1"]} expandIconPosition={"right"} ghost>
          <Panel
            className="panel"
            header="Холбоотой цахим хуудсууд"
            key="1"
          ></Panel>
        </Collapse>
      );
      break;
  }
  return (
    <Row className="kbase">
      <Col span={22}>
        <div className="div-button">
          <button
            className={state == "erhZuin" ? "clicked" : ""}
            onClick={() => setState("erhZuin")}
            type="button"
          >
            Хууль,эрх зүй
          </button>
          <button
            className={state == "sudalgaa" ? "clicked" : ""}
            onClick={() => setState("sudalgaa")}
            type="button"
          >
            Судалгаа
          </button>
          <button
            className={state == "surgalt" ? "clicked" : ""}
            onClick={() => setState("surgalt")}
            type="button"
          >
            Сургалт
          </button>
          <button
            className={state == "gariinAvlaga" ? "clicked" : ""}
            onClick={() => setState("gariinAvlaga")}
            type="button"
          >
            Гарын авлага
          </button>
          <button
            className={state == "holbootoiTsahimHuudsuud" ? "clicked" : ""}
            onClick={() => setState("holbootoiTsahimHuudsuud")}
            type="button"
          >
            Холбоотой цахим хуудсууд
          </button>
        </div>
        {menu}
      </Col>
    </Row>
  );
};
