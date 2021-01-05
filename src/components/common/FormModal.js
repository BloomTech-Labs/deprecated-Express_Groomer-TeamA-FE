import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const FormModal = ({
  title,
  visible,
  cancelText,
  okText,
  onOk,
  onCancel,
  footer,
}) => {
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
    <div>
      <Modal
        showModal={showModal}
        title="Edit Pet Information"
        visible={isModalVisible}
        cancelText="Cancel"
        okText="Save"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      ></Modal>
    </div>
  );
};

export default FormModal;
