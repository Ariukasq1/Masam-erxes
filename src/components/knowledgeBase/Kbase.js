import { Row, Col } from "antd";
import React, { useEffect, useState } from "react";
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
  buttonCat,
  buttonPosts,
  categories,
}) => {
  const [state, setState] = useState(27);
  let menu;

  const posts = (type) => {
    console.log(type);
    return (
      <>
        {buttonPosts.map((post, ind) => {
          console.log(post);

          if (type !== post.categories[0] && type !== post.categories[1]) {
            return null;
          }
          return (
            <div key={ind}>
              <Collapse
                defaultActiveKey={["1"]}
                expandIconPosition={"right"}
                ghost
              >
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
            </div>
          );
        })}
      </>
    );
  };

  return (
    <Row className="kbase">
      <Col span={22}>
        <Row className="div-button">
          {categories.map((word, ind) => {
            return (
              <Col key={ind}>
                <button
                  className={state === word.id ? "clicked" : ""}
                  onClick={() => setState(word.id)}
                  type="button"
                >
                  {word.name}
                </button>
              </Col>
            );
          })}
        </Row>
        {posts(state)}
      </Col>
    </Row>
  );
};
