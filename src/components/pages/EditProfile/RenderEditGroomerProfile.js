import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { editProfileData } from '../../../api';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
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

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <div className="form-container">
        <Form onFinish={submitHandler}>
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default RenderEditGroomerProfile;
