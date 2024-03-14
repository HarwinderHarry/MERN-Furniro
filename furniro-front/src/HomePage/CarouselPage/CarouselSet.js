import React from "react";
import "./CarouselSet.css";
import { Button, Carousel, Col, Row } from "antd";

const CarouselSet = () => {
  return (
    <div id="CarouselContainer">
      <section id="Carousel0" className="setWidth">
        <Row>
          <Col span={9}>
            <div className="box-123">
            <div className="text-11">
              <h2>50+ Beautiful rooms inspiration</h2>
<p>Our Designer already made a lot of beautiful prototipe of rooms that insprie you</p>
<Button> Explore More</Button>
            </div>
            </div>

          </Col>
          <Col span={7}>
            <div className="slidebackImg">
              <div className="boxes2">
              <div className="dataBox">
                <h3>
                  <span>01</span> Bed Room
                </h3>
                <h1>Inner Peace</h1>
              </div>

              <div className="arrow">
              &#8594;
              </div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <Carousel effect="fade">
              <div>
                <h3>
                  <img src="/imgs/slider1.png" alt="img1" />
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <img src="/imgs/slider2.png" alt="img2" />
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <img src="/imgs/slider3.png" alt="img3" />
                </h3>
              </div>
              <div>
                <h3>
                  {" "}
                  <img src="/imgs/slider4.png" alt="img4" />
                </h3>
              </div>
            </Carousel>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default CarouselSet;
