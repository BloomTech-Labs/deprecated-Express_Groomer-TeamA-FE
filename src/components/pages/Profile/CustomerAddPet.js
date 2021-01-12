import React, { useState } from 'react';
import { Col, Modal } from 'antd';
import CustomerPetForm from './CustomerPetForm';

const CustomerAddPet = ({ createPet }) => {
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
  return (
    <>
      <Modal
        title="Add Pet"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        destroyOnClose={true}
        footer={null}
      >
        <CustomerPetForm
          createPet={createPet}
          setIsModalVisible={setIsModalVisible}
        />
      </Modal>
      <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
        <div
          onClick={() => {
            showModal();
          }}
          className="add-pets"
        >
          <i className="fas fa-plus"></i>
        </div>
      </Col>
    </>
  );
};

export default CustomerAddPet;
