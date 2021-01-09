import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const CustomerEditInfo = ({
  name,
  email,
  updateForm,
  saveChanges,
  toggleUserInfoInputs,
  displayUserInfoInputs,
}) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

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
        onSubmit={e => {
          saveChanges(e);
        }}
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
            value={name}
          />
        </Form.Item>
        <Form.Item label="Email">
          <Input
            onChange={e => updateForm(e)}
            placeholder="Email"
            name="email"
            value={email}
          />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Button
            onClick={() => {
              toggleUserInfoInputs(!displayUserInfoInputs);
            }}
            type="primary"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomerEditInfo;
