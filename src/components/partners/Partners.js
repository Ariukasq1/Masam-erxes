import { Row, Col } from "antd";
import React from "react";
import getData from "../../utils";

export const Partner = ({
  partners,
  bigBox1,
  bigBox2,
  bigBox3,
  bigBox4,
  smallbox1,
  smallbox2,
  smallbox3,
  smallbox4,
  smallbox5,
  smallbox6,
}) => {
  return (
    <Row className="partner">
      <Col span={24}>
        <h2>{partners.title.rendered}</h2>
        <div className="boxContainer">
          <div className="bigBox">
            <img
              src={getData(bigBox1._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: bigBox1.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="bigBox">
            <img
              src={getData(bigBox2._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: bigBox2.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="boxContainer">
          <div className="bigBox">
            <img
              src={getData(bigBox3._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: bigBox3.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="bigBox">
            <img
              src={getData(bigBox4._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: bigBox4.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
        </div>
        <h2>
          <div
            dangerouslySetInnerHTML={{
              __html: partners.content.rendered,
            }}
          />
        </h2>
        <div className="boxContainer">
          <div className="smallBox">
            <img
              src={getData(smallbox1._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox1.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="smallBox">
            <img
              src={getData(smallbox2._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox2.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="smallBox">
            <img
              src={getData(smallbox3._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox3.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="boxContainer">
          <div className="smallBox">
            <img
              src={getData(smallbox4._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox4.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="smallBox">
            <img
              src={getData(smallbox5._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox5.content.rendered,
              }}
            />
             <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
          <div className="smallBox lastBox">
            <img
              src={getData(smallbox6._embedded, "image")}
              className="headPic"
            />
            <div
              dangerouslySetInnerHTML={{
                __html: smallbox6.content.rendered,
              }}
            />
            <div className="nextButton">
              <p>visit website</p>
              <a href="#">
                <img src="/images/home/Button.png" />
              </a>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
