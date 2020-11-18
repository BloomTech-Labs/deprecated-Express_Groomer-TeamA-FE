import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Input, InputNumber, Button } from 'antd';
import { editProfileData } from '../../../api';
import { useOktaAuth } from '@okta/okta-react';

const RenderEditGroomerProfile = props => {
  const { authState } = useOktaAuth();

  const submitHandler = values => {
    editProfileData(authState, values);
  };

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
            name="name"
            label="Email"
          >
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, {})(RenderEditGroomerProfile);

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderEditGroomerProfile.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
