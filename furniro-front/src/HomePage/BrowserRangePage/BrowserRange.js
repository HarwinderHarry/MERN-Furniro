import React from 'react';
import "./BrowserRange.css";
import { Col, Row } from 'antd';

const BrowserRange = () => {
  return (
    <div id='BRangeContainer'>
        <section id="BRange1" className='setWidth'>
        <Row>
      <Col span={24}>
        <div className="BRange-text">
            <h1>Browser The Range</h1>
            <p>Lorem ipsum may be used as a placeholder before the final copy is available</p>
        </div>
      </Col>
      
    </Row>
        </section>

        <section id="BRange2" className='setWidth'>
        <Row >
      <Col span={8}>
        <div className='img-box1' align="end">
            <img src='/imgs/BRange-1.png' alt='Img-1'/>
            <h3>Living </h3>
        </div>
      </Col>
      <Col span={8}>
        <div className='img-box2' align="center">
            <img src='/imgs/BRange-2.png' alt='Img-2'/>
            <h3>Bedroom </h3>
        </div>
      </Col>
      <Col span={8}>
        <div className='img-box3' align="start">
            <img src='/imgs/BRange-3.png' alt='Img-3'/>
            <h3>Dining </h3>
        </div>
      </Col>
     
    </Row>
        </section>
    </div>
  )
}

export default BrowserRange;