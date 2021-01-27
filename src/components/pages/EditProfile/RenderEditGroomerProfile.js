import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { editProfileData } from '../../../api';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { Layout, Row, Col } from 'antd';

import './edit-profile.css';

const RenderEditGroomerProfile = props => {
  const { authState, authService } = useOktaAuth();
  const [id, setId] = useState();

  const submitHandler = async values => {
    const response = {
      ...values,
      id: id,
    };
    await editProfileData(authState, response);
    props.history.push('/myprofile');
  };

  useEffect(() => {
    authService
      .getUser()
      .then(response => {
        setId(response.sub);
      })
      .catch(err => console.log(err));
  }, []);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };

  const ButtonItemLayout = {
    wrapperCol: {
      offset: 8,
    },
  };

  return (
    <div className="container-fluid">
      <p>
        <Link to="/">Home</Link>
      </p>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 16 }} sm={{ span: 24 }} md={{ span: 24 }}>
          <Form {...layout} onFinish={submitHandler}>
            <h2>Edit Business Information</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
              name="name"
              label="Name"
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
              name="email"
              label="Email"
            >
              <Input />
            </Form.Item>
            <Form.Item name="avatarUrl" label="Avatar URL">
              <Input />
            </Form.Item>
            <h2>Profile Page</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Company description is required',
                },
              ]}
              name="about"
              label="About"
            >
              <Input.TextArea placeholder="Tell your potential customers why they should choose your business" />
            </Form.Item>
            <h2>Services Page</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Services headline is required',
                },
              ]}
              name="service_heading"
              label="Headline"
            >
              <Input />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Services description is required',
                },
              ]}
              name="description"
              label="Description"
            >
              <Input.TextArea placeholder="What makes your grooming services unique from others?" />
            </Form.Item>
            <Form.Item {...ButtonItemLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default RenderEditGroomerProfile;
