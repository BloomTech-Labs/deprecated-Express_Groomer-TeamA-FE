import React, { useState, Fragment, useEffect } from 'react';
import { Modal } from 'antd';
import VerticalForm from '../../common/VerticalForm';

const AddPet = ({ handleSavePet, triggerAddPet, setTriggerAddPet }) => {
  const [newPet, setNewPet] = useState({
    id: 3,
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

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setTriggerAddPet(false);
  };

  return (
    <div>
      <Modal
        title="Add a Pet"
        visible={isModalVisible}
        cancelText="Cancel"
        okText="Save"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <VerticalForm
          setup={verticalFormSetup}
          data={newPet}
          fields={PetFormFields}
          handleSave={handleSavePet}
          handleOk={handleOk}
          petData={newPet}
          setPetData={setNewPet}
          setIsModalVisible={setIsModalVisible}
          triggerAddPet={triggerAddPet}
          setTriggerAddPet={setTriggerAddPet}
          handleCancel={handleCancel}
        ></VerticalForm>
      </Modal>
    </div>
  );
};

export default AddPet;
