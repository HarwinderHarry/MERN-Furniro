import React from 'react';
import './Cart.css';
import TopBanner from '../TopBottomBannerPages/TopBanner';
import BottomBanner from '../TopBottomBannerPages/BottomBanner';
import { Space, Table, Tag,Col, Row } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

const Cart = () => {
  return (
    <div id="CartContainer" > 
    <TopBanner />
    <section id="Cart" className="setWidth">
    <Row>
      <Col span={14}><Table columns={columns} dataSource={data} /></Col>
      <Col span={1}></Col>
      <Col span={8}>
        <div className='sideBox'>
          <h2>Cart Totals</h2>
          <div className='point-1'>
            <h3>Subtotal</h3>
            <h4>Rs.25,000.00</h4>
          </div>
          <div className='point-2'>
            <h3>Total</h3>
            <h4>Rs.25,000.00</h4>
          </div>

          <div className='btns'>
            <button>Check Out</button>
          </div>
        </div>
      </Col>
      
    </Row>
    
    </section>
    <BottomBanner />
    </div>
  )
}

export default Cart;