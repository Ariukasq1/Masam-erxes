import { Row, Col, Button } from "antd";
import React from "react";
import { getData } from "../../utils";

export const MasamToNews = ({ posts }) => {
  return (
    <Row className="newsTo">
      <Col span={12} className="bigNews">
        <div>
          <img
            className="overlayImage"
            src={getData(posts[0]._embedded, "image")}
          />
          <p className="overlayText">{posts[0].title.rendered}</p>
        </div>
      </Col>
      <Col span={12} className="medNews">
        {posts.map((post, index) => {
          if (index === 0 || index > 3) {
            return null;
          }
          return (
            <div key={index}>
              <img
                className="overlayImage"
                src={getData(post._embedded, "image")}
              />
              <p className="overlayText">{post.title.rendered}</p>
            </div>
          );
        })}
      </Col>
    </Row>
  );
};
