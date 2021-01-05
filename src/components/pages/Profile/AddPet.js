import React, { useState, Fragment, useEFfect } from 'react';
import { Menu, Dropdown, Modal } from 'antd';
import VerticalForm from '../../common/VerticalForm';

const AddPet = () => {
  // console.log("USER INFO", userInfo)
  // console.log("petData", petData)

  const [addPet, setAddPet] = useState({
    pet_name: '',
    color: '',
    date_of_birth: '',
    phone_number: '',
  });

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
    // {
    //   data: 'image_url',
    //   displayName: 'Image',
    // },
  ];

  // ANT DESIGN //
  // Vertical Pet Form //
  const verticalFormSetup = {
    layout: 'vertical',
    // data: pet,
  };

  // Modal
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
          // data={pet}
          fields={PetFormFields}
          // handleSave={handleSave}
          handleOk={handleOk}
          // petData={petData}
          // setPetData={setPetData}
          setIsModalVisible={setIsModalVisible}
        ></VerticalForm>
      </Modal>
    </div>
  );
};

export default AddPet;
