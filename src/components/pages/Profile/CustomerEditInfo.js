import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { editProfileData } from '../../../api';

const CustomerEditInfo = ({
  userFormData,
  updateForm,
  saveChanges,
  toggleUserInfoInputs,
  displayUserInfoInputs,
}) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');
  const [isDisable, setIsDisable] = useState(false);
  const { authState } = useOktaAuth();

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const buttonItemLayout = {
    wrapperCol: {
      span: 16,
      offset: 8,
    },
  };

  return (
    <>
      <Form
        className="customer-edit-form"
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        onValuesChange={onFormLayoutChange}
      >
        <Form.Item label="Name">
          <Input
            onChange={e => {
              updateForm(e);
            }}
            placeholder="Name"
            name="name"
            value={userFormData.name}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            onChange={e => updateForm(e)}
            placeholder="Email"
            name="email"
            value={userFormData.email}
          />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button
            onClick={() => {
              setIsDisable(true);
              editProfileData(authState, userFormData).then(() => {
                toggleUserInfoInputs(!displayUserInfoInputs);
                setIsDisable(false);
              });
            }}
            type="primary"
            disabled={isDisable}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomerEditInfo;
