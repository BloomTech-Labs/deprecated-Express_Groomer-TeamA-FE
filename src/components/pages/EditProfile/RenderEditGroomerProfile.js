import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { editProfileData } from '../../../api';
import { Form, Input, Button } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { Layout, Row, Col } from 'antd';

import './edit-profile.css';

const RenderEditGroomerProfile = props => {
  // Groomer Dummy Object
  const groomer = {
    id: 1,
    business_profile_id: 1,
    name: 'Groomer',
    email: 'email@gmail.com',
    avatar:
      'https://cdn1.vectorstock.com/i/1000x1000/08/65/cute-labrador-retriever-dog-avatar-vector-20670865.jpg',
    cover_images: [],
    services_heading: 'Professional Services',
    services_intro: 'About Professional Grooming Services',
    why_choose_description:
      'You should choose our grooming services because...',
  };
  const { authState, authService } = useOktaAuth();
  const [form] = Form.useForm();
  const [formData, setFormData] = useState(groomer);
  const [loading, setLoading] = useState({ loading: false, image_url: '' });
  const [id, setId] = useState();

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
    // Call Get groomer profile function here //

    setFormData({
      name: !groomer.name ? '' : groomer.name,
      email: !groomer.email ? '' : groomer.email,
      avatar: !groomer.avatar ? '' : groomer.avatar,
      cover_images: !groomer.cover_images ? [] : groomer.cover_images,
      services_heading: !groomer.services_heading
        ? ''
        : groomer.services_heading,
      services_intro: !groomer.services_intro ? '' : groomer.services_intro,
      why_choose_description: !groomer.why_choose_description
        ? ''
        : groomer.why_choose_description,
    });
  }, []);

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
      <p>
        <Link to="/">Home</Link>
      </p>
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
                name="name"
                onChange={e => onChange(e)}
                value={formData.name}
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
              label="Email"
            >
              <Input
                name="email"
                onChange={e => onChange(e)}
                value={formData.email}
              />
            </Form.Item>
            <Form.Item label={'Logo'}>
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
                name="service_heading"
                onChange={e => onChange(e)}
                value={formData.services_heading}
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
              <Button
                onClick={() => {
                  setFormData({ ...formData });
                }}
                type="primary"
                htmlType="submit"
              >
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
