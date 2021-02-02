import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Row, Col, Card, Button } from 'antd';

export const AboutGroomer = props => {
  console.log(props);
  return (
    <div className="container-fluid">
      <div style={{ padding: '25px', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', margin: 0 }}>
          Why Choose{' '}
          {Object.keys(props.profile) &&
            props.profile.business_profile &&
            props.profile.business_profile.business_name}
        </h2>
        <p style={{ textAlign: 'left' }} className="groomer-description">
          {Object.keys(props.profile) &&
            props.profile.business_profile &&
            props.profile.business_profile.why_choose_description}
        </p>
        <div style={{ display: 'inline-block' }}>
          <Button style={{ padding: '0 15px', margin: '15px' }}>
            <Link to="/groomer-services">LEARN MORE</Link>
          </Button>
          <Link to={`${props.id}/groomer-services`}>
            <Button style={{ padding: '0 15px', margin: '15px' }}>
              BOOK A SERVICE
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <h2 style={{ textAlign: 'center', margin: 0 }}>
          Fast &#38; Safe Online Booking
        </h2>
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
