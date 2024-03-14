import React, { useState } from 'react';
import { Menu, Col, Row } from 'antd';
import { FaUserAlt,FaSearch, FaRegHeart,FaShoppingCart } from "react-icons/fa";
import './HeaderCom.css';
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

const HeaderCom = () => {
    const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
    <div id='Headercontainer'>
        <section id='Header' className='setWidth'>
        <Row>
      <Col span={6} className='logoImg'>
        <img src='./imgs/LogoImg.png' alt='Logo'/>
      </Col>
      <Col span={10} className='MenuList'><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> </Col>
      <Col span={8} className='socialIcons'>
        <div className='iconList'>
        <FaUserAlt />
        <FaSearch />
        <FaRegHeart />
        <FaShoppingCart />
        </div>
      </Col>
    </Row>
        </section>
    </div>
  )
}

export default HeaderCom;