import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editProfileData } from '../../../api';
import { Form, Input, InputNumber, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';

const RenderEditCustomerProfile = props => {
  const [info, setInfo] = useState('');
  const { authState } = useOktaAuth();

  const handleChange = e => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const submitHandler = values => {
    editProfileData(authState, values);
  };

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <Form onFinish={submitHandler}>
        <Form.Item
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
          name="name"
          label="name"
        >
          <Input />
        </Form.Item>
        {/* <Form.Item placeholder={user && user.email} name={info.email} labelId="Email:" />
          <Form.Item placeholder={user && user.zone} name={info.zone} labelId="Zone:" />
          <Form.Item placeholder={user && user.pet_name} name={info.pet_name} labelId="Pet Name:" /> */}
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    customerInfo: state.customerInfo,
  };
};

export default connect(mapStateToProps, {})(RenderEditCustomerProfile);

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderEditCustomerProfile.propTypes = {
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
