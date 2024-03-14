import React from "react";
import "./YourSetup.css";
import { Col, Row, Image } from "antd";

const YourSetup = () => {
  return (
    <div id="SetupContainer">
      <section id="Setup">
        <Row>
          <Col span={24}>
            <h4>Share your setup with</h4>
          </Col>
          <Col span={24}>
            <h1>#FurniroFurniture</h1>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={6}>
                <Image
                //   width={200}
                  src="imgs/slider1.png"
                  alt="img1" 
                />
              </Col>
              <Col span={6}>
              <Image
                //   width={200}
                  src="imgs/slider3.png"
                  alt="img1" 
                />
              </Col>
              <Col span={12}>
                <Image
                //   width={200}
                  src="imgs/gallery3.png"
                  alt="img1" 
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default YourSetup;
