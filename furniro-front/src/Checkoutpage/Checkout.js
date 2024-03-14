import React from "react";
import "./Checkout.css";
import TopBanner from "../TopBottomBannerPages/TopBanner";
import {
  Col,
  Row,
  Form,
  Input,
  InputNumber,
  Select
} from "antd";
import BottomBanner from "../TopBottomBannerPages/BottomBanner";

const Checkout = () => {
  return (
    <div id="CheckoutContainer">
      <TopBanner />
      <section id="Checkout" className="setWidth">
        <Row>
          <Col span={12}>
            <div className="form-box">
              <h4> Billing Details</h4>
              <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              // disabled={componentDisabled}
              style={{
                maxWidth: 500,
              }}
            >
               <div className="form-inputs">
               <Form.Item label="First-Name">
         <div> <Input /> </div>
        </Form.Item>
        <Form.Item label="Last-Name">
          <Input />
        </Form.Item>
               </div>

               <Form.Item label="Company Name">
          <Input />
        </Form.Item>

        <Form.Item label="Country / Region">
          <Select>
            <Select.Option value="demo">Demo 1</Select.Option>
            <Select.Option value="demo">Demo 2</Select.Option>
            <Select.Option value="demo">Demo 3</Select.Option>
            <Select.Option value="demo">Demo 4</Select.Option>
            <Select.Option value="demo">Demo 5</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="street Address">
          <Input />
        </Form.Item>

        <Form.Item label="Town / City">
          <Input />
        </Form.Item>

        <Form.Item label="Province">
          <Select>
            <Select.Option value="demo">Demo 1</Select.Option>
            <Select.Option value="demo">Demo 2</Select.Option>
            <Select.Option value="demo">Demo 3</Select.Option>
            <Select.Option value="demo">Demo 4</Select.Option>
            <Select.Option value="demo">Demo 5</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="ZIP Code">
          <InputNumber />
        </Form.Item>

        <Form.Item label="Phone Number">
          <InputNumber />
        </Form.Item>

        <Form.Item
    //   name={['user', 'email']}
      label="Email"
      rules={[
        {
          type: 'email',
        },
      ]}
    >
      <Input />
    </Form.Item>

        
            </Form>
            </div>
          </Col>
          <Col span={12}>
            <div className="form-details">
                <div className="titles">
                    <h4>Product</h4>
                    <h4>Subtotal</h4>
                </div>

                <div className="Line-11">
                    <h4><span>Asgaar Sofa</span> X 1</h4>
                    <h4>Rs.250,000.00</h4>
                </div>
                <div className="Line-22">
                    <h4>Subtotal</h4>
                    <h4>Rs.250,000.00</h4>
                </div>

                <div className="Line-33">
                    <h4>Total</h4>
                    <h2>Rs.250,000.00</h2>
                </div>
            </div>

            <div className="bottom-tex">
              <ul className="list-1">
                <li>Direct Bank Transfer</li>
              </ul>
              <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
              <ul className="list-2">
                <li>Direct Bank Transfer</li>
                <li>Cash On Delivery</li>
              </ul>
              <p className="last">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span style={{fontWeight: "700"}}>privacy policy.</span></p>
<div className="btn">
              <button>Place Order</button>
            </div>
            </div>
          </Col>
        </Row>
      </section>
      <BottomBanner />
    </div>
  );
};

export default Checkout;
