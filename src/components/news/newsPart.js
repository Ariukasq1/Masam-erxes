import { Row, Col, Dropdown, Button, Menu } from "antd";
import React from "react";
import { getData } from "../../utils";
export const NewsPart = ({ posts }) => {
  console.log(posts, "===========news");
  return (
    <div className="newsCats">
      <Row className="newsPart1">
        {(() => {
          const options = [];
          for (let i = 4; i < 8; i++) {
            options.push(
              posts[i] ? (
                <div>
                  <img
                    className="overlayImage"
                    src={getData(posts[i]._embedded, "image")}
                  />
                  <p className="overlayText">{posts[i].title.rendered}</p>
                </div>
              ) : (
                <div></div>
              )
            );
          }

          return options;
        })()}
      </Row>
      {/* <Row className="newsPart2">
        {(() => {
          const options = [];
          for (let i = 8; i < 13; i++) {
            options.push(
              posts[i] ? (
                <div>
                  <img
                    className="overlayImage"
                    src={getData(posts[i]._embedded, "image")}
                  />
                  <p className="overlayText">{posts[i].title.rendered}</p>
                </div>
              ) : (
                <div></div>
              )
            );
          }

          return options;
        })()}
      </Row> */}
    </div>
  );
};
