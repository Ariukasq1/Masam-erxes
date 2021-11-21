import { FileExcelFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
import React, { useState } from "react";
import getData from "../../utils";

export const Proj = ({ projects }) => {
  const [state, setState] = useState("uvurhangai");
  let menu;

  switch (state) {
    case "uvurhangai":
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
      break;
    case "uvs":
      menu = (
        <div>
          <p className="title">
            <b>Увс</b>
          </p>
        </div>
      );
      break;
    case "hovd":
      menu = (
        <div>
          <p className="title">
            <b>Ховд</b>
          </p>
        </div>
      );
      break;
    case "selenge":
      menu = (
        <div>
          <p className="title">
            <b>Увс</b>
          </p>
        </div>
      );
      break;
    case "hentii":
      menu = (
        <div>
          <p className="title">
            <b>Хэнтий</b>
          </p>
        </div>
      );
      break;
    case "govisumber":
      menu = (
        <div>
          <p className="title">
            <b>Говьсүмбэр</b>
          </p>
        </div>
      );
      break;
    case "suhbaatar":
      menu = (
        <div>
          <p className="title">
            <b>Сүхбаатар</b>
          </p>
        </div>
      );
      break;
  }
  return (
    <Row className="proj">
      <Col span={20}>
        <div className="img">
          <img src={getData(projects._embedded, "image")} />
        </div>
        <div className="div-button">
          <button
            className={state == "uvurhangai" ? "clicked" : ""}
            onClick={() => setState("uvurhangai")}
            type="button"
          >
            Өвөрхангай
          </button>
          <button
            type="button"
            className={state == "uvs" ? "clicked" : ""}
            onClick={() => setState("uvs")}
          >
            Увс
          </button>
          <button
            type="button"
            className={state == "hovd" ? "clicked" : ""}
            onClick={() => setState("hovd")}
          >
            Ховд
          </button>
          <button
            type="button"
            className={state == "selenge" ? "clicked" : ""}
            onClick={() => setState("selenge")}
          >
            Сэлэнгэ
          </button>
          <button
            type="button"
            className={state == "hentii" ? "clicked" : ""}
            onClick={() => setState("hentii")}
          >
            Хэнтий
          </button>
          <button
            type="button"
            className={state == "govisumber" ? "clicked" : ""}
            onClick={() => setState("govisumber")}
          >
            Говьсүмбэр
          </button>
          <button
            type="button"
            className={state == "suhbaatar" ? "clicked" : ""}
            onClick={() => setState("suhbaatar")}
          >
            Сүхбаатар
          </button>
        </div>
        {menu}
      </Col>
    </Row>
  );
};
