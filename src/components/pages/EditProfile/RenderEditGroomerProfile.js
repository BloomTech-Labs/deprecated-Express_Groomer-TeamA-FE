import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { editBusinessProfileInfoData } from '../../../api';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { Row, Col } from 'antd';

import './edit-profile.css';

const RenderEditGroomerProfile = props => {
  const { authState } = useOktaAuth();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(
    props.profile.business_profile || {}
  );
  const [loading, setLoading] = useState({ loading: false, image_url: '' });

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Image Upload Function
  const uploadImage = async e => {
    if (formData.cover_images.length < 3) {
      const files = e.target.files;
      const data = new FormData();

      if (files.length > 0) {
        data.append('file', files[0]);
        data.append('upload_preset', 'images');
        setLoading(true);
        const res = await fetch(
          'https://api.cloudinary.com/v1_1/milo95/image/upload',
          { method: 'POST', body: data }
        );
        const file = await res.json();
        setFormData({
          ...formData,
          cover_images: formData.cover_images.concat([file.secure_url]),
        });
        setLoading({ loading: false });
      } else {
        return;
      }
    }
  };

  useEffect(() => {
    if (
      Object.keys(props.profile).length > 0 &&
      Object.keys(formData).length === 0
    ) {
      setFormData(props.profile.business_profile);
    }
  }, [props.profile, formData]);

  const submitHandler = async () => {
    try {
      let data = await editBusinessProfileInfoData(
        authState,
        formData.profile_id,
        formData
      );
      setFormData({ ...data });
    } catch (e) {
      console.log(e);
    }
  };

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
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 16 }} sm={{ span: 24 }} md={{ span: 24 }}>
          <Form {...layout} onFinish={submitHandler} form={form}>
            <h2>Edit Business Information</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}
              label="Name"
            >
              <Input
                name="business_name"
                onChange={e => onChange(e)}
                value={formData.business_name}
              />
            </Form.Item>
            <Form.Item label={'Slider Images'}>
              <Input
                type="file"
                name="file"
                placeholder="Upload Image..."
                onChange={uploadImage}
              />
            </Form.Item>
            {/*AVATAR URL*/}
            <h2>Profile Page</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Company description is required',
                },
              ]}
              label="About"
            >
              <Input.TextArea
                name="about"
                onChange={e => onChange(e)}
                value={formData.why_choose_description}
                placeholder="Tell your potential customers why they should choose your business"
              />
            </Form.Item>
            <h2>Services Page</h2>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Services headline is required',
                },
              ]}
              label="Headline"
            >
              <Input
                name="service_intro"
                onChange={e => onChange(e)}
                value={formData.service_intro}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Services description is required',
                },
              ]}
              label="Description"
            >
              <Input.TextArea
                name="services_intro"
                onChange={e => onChange(e)}
                value={formData.services_intro}
                placeholder="What makes your grooming services unique from others?"
              />
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
