import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card, Button } from 'antd';

export const AboutGroomer = () => {
  return (
    <div className="container-fluid">
      <div style={{ padding: '25px', maxWidth: '900px', margin: '0 auto' }}>
        <h2>Why Choose @GROOMER_NAME</h2>
        <p style={{ textAlign: 'left' }} className="groomer-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div style={{ display: 'inline-block' }}>
          <Button style={{ padding: '0 15px', margin: '15px' }}>
            <Link to="/groomer-services">LEARN MORE</Link>
          </Button>
          <Button style={{ padding: '0 15px', margin: '15px' }}>
            BOOK A SERVICE
          </Button>
        </div>
      </div>
      <div>
        <h2>Fast &#38; Safe Online Booking</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <Row className="circle-container">
          <Col style={{ margin: '15px' }} className="circle">
            STEP 1
          </Col>
          <Col style={{ margin: '15px' }} className="circle">
            STEP 2
          </Col>
          <Col style={{ margin: '15px' }} className="circle">
            STEP 3
          </Col>
        </Row>
      </div>
    </div>
  );
};
