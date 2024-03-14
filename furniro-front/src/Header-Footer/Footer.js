import React, { useState } from 'react';
import {Menu, Col, Row } from 'antd';
import { Button, Form, Input } from 'antd';
import './Footer.css';
const items = [
  {
    label: 'Home',
    key: 'home',
  },
  {
    label: 'About',
    key: 'about',
  },
  {
    label: 'Shop',
    key: 'shop',
  },
  {
    label: 'Contact us',
    key: 'contact-us',
  },
  
];

const helpitems = [
  {
    label: 'Payment Options',
    key: 'payment-options',
  },
  {
    label: 'Returns',
    key: 'returns',
  },
  {
    label: 'Privacy Policies',
    key: 'privacy-policies',
  },
  
];

const Footer = () => {
  const [current, setCurrent] = useState('home');
  const [helplink, setHelplink] = useState('payment-options');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  const onClick2 = (e) => {
    console.log('click ', e);
    setHelplink(e.key);
  };

  return (
    <div id='FooterContainer'>
        <section id='Footer' className='setWidth'>
        <Row>
      <Col span={6} className='Footerlogo'>
    <div className='footerOne'>
      <div className='one'>
    <img src='./imgs/LogoImg.png' alt='Logo'/>

      </div>
      <div className='two'>
      400 University Drive Suite 200 Coral Gables,
FL 33134 USA
      </div>
    </div>

      </Col>
      <Col span={6} className='footertwo'>
        <div className='one'>
          <h3>Links</h3>
          <div className='footmenu'>
          <Menu onClick={onClick} selectedKeys={[current]} mode="vertical" items={items} />
          </div>
        </div>
      </Col>
      <Col span={6} className='footerthree'>
      <div className='one'>
          <h3>Help</h3>
          <div className='footmenu'>
          <Menu onClick={onClick2} selectedKeys={[helplink]} mode="vertical" items={helpitems} />
          </div>
        </div>
      </Col>
      <Col span={6}>
        <div>
          <h3>Newletter</h3>
          <Form className='forms'>
          <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
      <Input placeholder="Enter Your Email Address" />
    </Form.Item>
    <Form.Item >
      <Button  htmlType="submit">
        Submit
      </Button>
    </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>

</section>
    </div>
  )
}

export default Footer;