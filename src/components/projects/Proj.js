import { FileExcelFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
import React, { useState } from "react";
import getData from "../../utils";

export const Proj = ({ projects, buttonsPosts, buttonsCat, categories }) => {
  const [state, setState] = useState(38);
  let menu;

  menu = (
    <div>
      <p className="title">
        <b>{projects.title.rendered}</b>
      </p>
      <div
        dangerouslySetInnerHTML={{
          __html: projects.content.rendered,
        }}
      />
    </div>
  );
console.log(categories)
  return (
    <Row className="proj">
      <Col span={20}>
        <div className="img">
          <img src={getData(projects._embedded, "image")} />
        </div>
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

        {menu}
      </Col>
    </Row>
  );
};
