import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { editCustomerPet } from '../../api';

const VerticalForm = ({ fields, layout, data, setIsModalVisible }) => {
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState(layout);
  const [formData, setFormData] = useState(data);
  const [loading, setLoading] = useState({ loading: false, image_url: '' });
  const dateRegex = /^([0-3]?[0-9])\-([0-3]?[0-9])\-((?:[0-9]{2})?[0-9]{2})$/g;
  const { authState } = useOktaAuth();

  const onChange = e => {
    if (e.target.value === '') {
      setFormData({ ...formData, [e.target.name]: null });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  // Image Upload Function
  const uploadImage = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'images');
    setLoading(true);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/milo95/image/upload',
      { method: 'POST', body: data }
    );
    const file = await res.json();

    setFormData({ ...formData, image_url: file.secure_url });
    setLoading({ loading: false });
  };
  // End of Image Upload Functions //

  const formItemLayout =
    formLayout === layout
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null;

  const buttonItemLayout =
    formLayout === layout
      ? {
          wrapperCol: { span: 14, offset: 4 },
        }
      : null;

  console.log(formData);

  return (
    <Form {...formItemLayout} layout={formLayout} form={form}>
      {fields.map(field => {
        if (field.data === 'date_of_birth') {
          return (
            <Form.Item
              name={field.data}
              key={field.data}
              label={field.displayName}
              hasFeedback
              rules={[
                {
                  pattern: new RegExp(dateRegex),
                  message: 'Date format Should be in format MM-DD-YYYY',
                },
              ]}
            >
              <Input
                name={field.data}
                onChange={e => onChange(e)}
                value={formData[field.data]}
              />
            </Form.Item>
          );
        } else {
          return (
            <Form.Item key={field.data} label={field.displayName}>
              <Input
                name={field.data}
                onChange={e => onChange(e)}
                value={formData[field.data]}
              />
            </Form.Item>
          );
        }
      })}
      <Form.Item label={'Photo'}>
        <Input
          type="file"
          name="file"
          placeholder="Upload Image..."
          onChange={uploadImage}
        />
      </Form.Item>
      <Form.Item>
        <Button
          onClick={() => {
            const regex = RegExp(dateRegex);
            //check to see date format is right
            if (!regex.test(formData.date_of_birth) && formData.date_of_birth) {
              console.log('wrong date format');
              return;
            }
            setIsModalVisible(false);
            editCustomerPet(authState, {
              animal_id: formData.animal.id,
              ...formData,
            });
          }}
          htmlType="submit"
        >
          Save
        </Button>
      </Form.Item>
    </Form>
  );
};
export default VerticalForm;
