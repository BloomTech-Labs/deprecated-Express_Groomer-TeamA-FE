import React, { useState } from 'react';
import { Form, Input, Button, Select } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { createCustomerPet } from '../../../api';

const CustomerPetForm = ({ setIsModalVisible }) => {
  const [form] = Form.useForm();
  const { authState } = useOktaAuth();
  const [formData, setFormData] = useState({
    pet_name: null,
    color: null,
    date_of_birth: null,
    phone_number: null,
    image_url: null,
  });

  const [selectionValue, setSelectionValue] = useState('');

  const onSelectionChange = value => {
    setSelectionValue(value);
  };

  const onFormChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/milo95/image/upload',
      { method: 'POST', body: data }
    );
    const file = await res.json();

    setFormData({ ...formData, image_url: file.secure_url });
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
      span: 14,
    },
  };

  return (
    <Form {...formItemLayout} layout={'vertical'} form={form}>
      <Form.Item
        label="Name"
        name="pet_name"
        rules={[
          {
            required: true,
            message: 'Please input pet name!',
          },
        ]}
        hasFeedback
      >
        <Input
          name="pet_name"
          placeholder="Name"
          value={formData.pet_name}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="Color">
        <Input
          name="color"
          placeholder="Color"
          value={formData.color}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="DOB">
        <Input
          name="date_of_birth"
          placeholder="Date of birth"
          value={formData.date_of_birth}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item label="Contact">
        <Input
          name="phone_number"
          placeholder="Contact"
          value={formData.phone_number}
          onChange={onFormChange}
        />
      </Form.Item>
      <Form.Item
        label="Animal Type"
        name="animal-type"
        rules={[
          {
            required: true,
            message: 'Please select animal type',
          },
        ]}
        hasFeedback
      >
        <Select
          name="animal-type"
          value={selectionValue}
          onChange={onSelectionChange}
        >
          <Select.Option value="1">Cat</Select.Option>
          <Select.Option value="2">Dog</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label={'Photo'}>
        <Input
          type="file"
          name="file"
          placeholder="Upload Image..."
          onChange={uploadImage}
        />
      </Form.Item>
      <Form.Item {...buttonItemLayout}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={() => {
            if (!formData.pet_name) {
              return;
            }

            if (!selectionValue) {
              return;
            }

            const data = {
              animal_id: +selectionValue,
              ...formData,
            };

            createCustomerPet(authState, data);
            setFormData({
              pet_name: null,
              color: null,
              date_of_birth: null,
              phone_number: null,
              image_url: null,
            });
            setIsModalVisible(false);
          }}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CustomerPetForm;
