import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './mapBox.scss';
import { Link } from 'react-router-dom';

function MapModal(props) {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleSubmit = e => {
    setVisible(false);
  };

  return (
    <>
      <Link>
        <i onClick={() => showModal()} className="fas fa-cut"></i>
      </Link>

      <Modal
        title={props.groomer.name}
        visible={visible}
        onOk={handleSubmit}
        onCancel={handleSubmit}
      >
        <h3>Groomer/Business info</h3>
        <p>Business</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
}

export default MapModal;
