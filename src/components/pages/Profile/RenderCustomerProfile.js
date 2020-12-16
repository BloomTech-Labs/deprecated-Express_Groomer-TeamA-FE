import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './profile.css';

const RenderCustomerProfile = ({ userInfo }) => {
  return (
    <div>
      {userInfo && (
        <div className="profile-container">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              <div className="customer-info">
                <Avatar size={84} icon={<UserOutlined />} />
                <p>Username: User1</p>
                <p>Email: user@email.com</p>
                <Button type="primary" size={'large'}>
                  Edit
                </Button>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }}>
              <div className="upcoming-appointments">
                <h2>Upcoming Appointments</h2>
                <div className="upcoming-appointments-content">
                  <div className="current-appointments">
                    <p>Date:</p>
                    <p>12/4/2020</p>
                    <p>Location:</p>
                    <p>123 SW Air LN 12345</p>
                    <p>Pet:</p>
                    <p>Molly</p>
                  </div>
                  <div className="current-appointments">
                    <p>Date:</p>
                    <p>12/4/2020</p>
                    <p>Location:</p>
                    <p>123 SW Air LN 12345</p>
                    <p>Pet:</p>
                    <p>Rusty</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <div className="pet-container">
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                <div className="customer-pet">
                  <Avatar size={48} icon={<UserOutlined />} />
                  <div className="pet-info">
                    <p>Name: Rusty</p>
                    <p>Type: Dog</p>
                    <Button type="primary" size={'medium'}>
                      More Options
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                <div className="customer-pet">
                  <Avatar size={48} icon={<UserOutlined />} />
                  <div className="pet-info">
                    <p>Name: Rusty</p>
                    <p>Type: Dog</p>
                    <Button type="primary" size={'medium'}>
                      More Options
                    </Button>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                <div className="add-pets">
                  <i class="fas fa-plus"></i>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
