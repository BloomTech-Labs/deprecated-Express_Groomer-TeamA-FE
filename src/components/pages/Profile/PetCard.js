import React, { useState, useEffect } from 'react';
/// Ant Design ///
// Dropdown ///
import { Menu, Dropdown, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
// Form
import VerticalForm from '../../common/VerticalForm';

const PetCard = ({ pet, petData, handleSave, handleDelete, setPetData }) => {
  // Dummy Data
  const PetFormFields = [
    {
      data: 'pet_name',
      displayName: 'Name',
    },
    {
      data: 'color',
      displayName: 'Color',
    },
    {
      data: 'date_of_birth',
      displayName: 'DOB',
    },
    {
      data: 'phone_number',
      displayName: 'Contact',
    },
    {
      data: 'image_url',
      displayName: 'Image',
    },
  ];

  // ANT DESIGN //
  // Vertical Pet Form //
  const verticalFormSetup = {
    layout: 'vertical',
    data: pet,
  };
  // Menu
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a
          onClick={e => {
            e.preventDefault();
            showModal();
          }}
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Edit
        </a>
        <Modal
          title="Edit Pet Information"
          visible={isModalVisible}
          cancelText="Cancel"
          okText="Save"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
        >
          <VerticalForm
            setup={verticalFormSetup}
            data={pet}
            fields={PetFormFields}
            handleSave={handleSave}
            handleOk={handleOk}
            petData={petData}
            setPetData={setPetData}
          ></VerticalForm>
        </Modal>
      </Menu.Item>
      <Menu.Item danger>
        <Link to={`myprofile`} onClick={() => handleDelete(pet.id)}>
          Delete
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
      <div className="customer-pet">
        <Avatar size={48} icon={<UserOutlined />} />
        <div className="pet-info">
          <p>Name: {pet.pet_name}</p>
          <p>Color: {pet.color}</p>
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              More Options <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    </Col>
  );
};

export default PetCard;
