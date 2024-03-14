import React from 'react'
import TopBanner from '../TopBottomBannerPages/TopBanner';
import BottomBanner from '../TopBottomBannerPages/BottomBanner';
import { Col, Row,  Form, Input , Button} from 'antd';
import './ContactUs.css';
import { FaLocationDot, FaClock } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
// const { TextArea } = Input;

const ContactUs = () => {
  
  return (
    <div id="ContactContainer">
      <TopBanner />
      <section id="Contact" className="setWidth">
      <Row>
      <Col span={24}>
        <div>
          <h4> Get in Touch with us</h4>
          <p>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
      </Col>
    </Row>
      </section>
      <section id='Contact-2' className="setWidth">
      <Row>
      <Col span={10}>
        <div className='contact-box'>
          <div className='box-1 box'>
            <div className='icon'><FaLocationDot /></div>
            <div className='text'>
              <h2>Address</h2>
              <p>234, Floor no-2 , SE Avenue,<br /> New York, 11298.</p>
            </div>
          </div>
          
          <div className='box-2 box'>
            <div className='icon'><MdCall /></div>
            <div className='text'>
              <h2>Phone</h2>
              <p>Mobile No :+(84) 567-6789</p>
              <p>Mobile No :+(84) 456-6789</p>
            </div>
          </div>

          <div className='box-3 box'>
            <div className='icon'><FaClock /></div>
            <div className='text'>
              <h2>Working Time</h2>
              <p>Monday-Friday : 9:00-6:00</p>
              <p>Saturday-Sunday :9:00-4:00</p>
            </div>
          </div>
        </div>
         </Col>
      <Col span={14}>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        // disabled={componentDisabled}
        style={{ maxWidth: 600 }}
      >
        <Form.Item label="Your Name">
          <Input placeholder='Enter your name' />
        </Form.Item>

        <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input placeholder="abc@gmail.com" />
      </Form.Item>

      <Form.Item label="Subject">
          <Input placeholder='This is Optional' />
        </Form.Item>

        <Form.Item
      label="Message"
      name="TextArea"
      rules={[{ required: true, message: 'Please input!' }]}
    >
      <Input.TextArea />
    </Form.Item>

    <div className='btns'>
    <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </div>
      </Form>
      </Col>
    </Row>
      </section>
      <BottomBanner />
    </div>
  )
}

export default ContactUs;