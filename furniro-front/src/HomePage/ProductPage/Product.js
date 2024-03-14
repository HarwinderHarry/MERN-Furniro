import React from "react";
import "./Product.css";
import { Col, Row, Card, Button } from "antd";
const { Meta } = Card;

const Product = () => {
  return (
    <div id="ProductContainer">
      <section id="product" className="setWidth">
        <Row>
          <Col span={24}>
            <h1>Our Product</h1>
          </Col>
        </Row>
      </section>



      <section id="product2" className="setWidth" >
        <Row >
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
          <Col span={6} >
          <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
          <Col span={6} ><Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
            </Col>
          <Col span={6}>
          <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="product2" className="setWidth" >
        <Row >
          <Col span={6} >
            <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
          <Col span={6} >
          <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
          <Col span={6} ><Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
            </Col>
          <Col span={6}>
          <Card
              hoverable
              style={{ width: 320, borderRadius:0, padding:0}}
              // cover={<img alt="example" src="/imgs/product1.png" />}
              className="cards card1"
            >
              <div className="img-block">
                <div className="discount">-35%</div>
                </div>
              <div className="data">
              <Meta title="Syltherine" description="Stylish cafe chair" />
              <div className="costPrice">
                <h3>Rp 2.500.000</h3>
                <h4>Rp 3.500.000</h4>
              </div>
              </div>
            </Card>
          </Col>
        </Row>
      </section>

      <section id="product5" className="setWidth">
        <Row>
          <Col span={24}>
            <Button>Show More</Button>
          </Col>
        </Row>
      </section>

    </div>
  );
};

export default Product;
