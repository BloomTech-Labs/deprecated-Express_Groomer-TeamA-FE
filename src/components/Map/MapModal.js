import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import './mapBox.scss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'antd';
import ProfileCard from '../pages/ProfileList/ProfileCard';

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
      <Tooltip title={props.groomer.name}>
        <span>
          <Link>
            <i onClick={() => showModal()} className="fas fa-cut"></i>
          </Link>
        </span>
      </Tooltip>
      ,
      <Modal visible={visible} onOk={handleSubmit} onCancel={handleSubmit}>
        <ProfileCard item={props.groomer} />
      </Modal>
    </>
  );
}

export default MapModal;
