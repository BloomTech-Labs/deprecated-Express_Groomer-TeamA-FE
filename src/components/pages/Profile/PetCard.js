import React, { useState } from 'react';
/// Ant Design ///
// Dropdown ///
import { Menu, Dropdown, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const PetCard = () => {
  // ANT DESIGN //
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
  // Menu
  const menu = (
    <Menu>
      <Menu.Item onClick={showModal}>
        <a
          onClick={e => e.preventDefault()}
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          Edit
        </a>
        <Modal
          title="Basic Modal"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Menu.Item>
      <Menu.Item danger>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          Delete
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
      <div className="customer-pet">
        <Avatar size={48} icon={<UserOutlined />} />
        <div className="pet-info">
          <p>Name: Rusty</p>
          <p>Type: Dog</p>
          <Dropdown overlay={menu}>
            <Link
              className="ant-dropdown-link"
              onClick={e => e.preventDefault()}
            >
              More Options <DownOutlined />
            </Link>
          </Dropdown>
        </div>
      </div>
    </Col>
  );
};

export default PetCard;
