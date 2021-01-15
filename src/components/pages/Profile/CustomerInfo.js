import React from 'react';
import { Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const CustomerInfo = ({
  userFormData,
  toggleUserInfoInputs,
  displayUserInfoInputs,
}) => {
  return (
    <div className="customer-info">
      <Avatar size={84} icon={<UserOutlined />} />
      <p>Username: {userFormData.name}</p>
      <p>Email: {userFormData.email}</p>
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
