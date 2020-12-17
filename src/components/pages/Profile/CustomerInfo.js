import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CustomerInfo = ({
  name,
  email,
  toggleUserInfoInputs,
  displayUserInfoInputs,
}) => {
  return (
    <div className="customer-info">
      <Avatar size={84} icon={<UserOutlined />} />
      <p>Username: {name}</p>
      <p>Email: {email}</p>
      <Button
        onClick={() => {
          toggleUserInfoInputs(!displayUserInfoInputs);
        }}
        type="primary"
        size={'large'}
      >
        Edit
      </Button>
    </div>
  );
};

export default CustomerInfo;
