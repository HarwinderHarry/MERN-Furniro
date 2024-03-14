import React from 'react';
import './Banner.css';
import { Col, Row } from 'antd';

const Banner = () => {
  return (
    <div id='BannerContainer'>
      <section id='Banner'>
      <Row>
      <Col span={12} offset={12}>
       <div className='bannerBox'>
        <div className='boxData'>
          <h4> New Arrival</h4>
          <h1>Descover Our <br /> New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button>Buy Now</button>
        </div>
       </div>
      </Col>
    </Row>
      </section>
    </div>
  )
}

export default Banner;