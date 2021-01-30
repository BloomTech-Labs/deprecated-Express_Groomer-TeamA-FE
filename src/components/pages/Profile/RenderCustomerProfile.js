import React, { useState, useEffect } from 'react';
import { Row, Col, Modal } from 'antd';
import CustomerInfo from './CustomerInfo';
import CustomerEditInfo from './CustomerEditInfo';
import PetCard from './PetCard';
import AppointmentCard from './AppointmentCard';
import CustomerAddPet from './CustomerAddPet';
import convertISODate from '../../../utils/convertiso';
import './profile.css';
import { StyledLink } from '../ScheduledAppointments/Styles';

const RenderCustomerProfile = ({ userInfo, pets, appointments }) => {
  const [displayUserInfoInputs, toggleUserInfoInputs] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [userFormData, setUserFormData] = useState({
    id: null,
    name: null,
    email: null,
  });
  const [currentPetSelected, setCurrentPetSelected] = useState(0);

  useEffect(() => {
    setUserFormData({
      id: userInfo.id,
      name: userInfo.name,
      email: userInfo.email,
    });
  }, [userInfo]);

  const onChange = e => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  // Edit User Info Submit Function
  const onSubmit = e => {
    e.preventDefault();
    setUserFormData(userFormData);
  };

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  return (
    <div>
      {userInfo && (
        <div className="profile-container">
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
              {!displayUserInfoInputs ? (
                <CustomerInfo
                  userFormData={userFormData}
                  toggleUserInfoInputs={toggleUserInfoInputs}
                  displayUserInfoInputs={displayUserInfoInputs}
                />
              ) : (
                <CustomerEditInfo
                  userFormData={userFormData}
                  saveChanges={onSubmit}
                  updateForm={onChange}
                  toggleUserInfoInputs={toggleUserInfoInputs}
                  displayUserInfoInputs={displayUserInfoInputs}
                />
              )}
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 16 }} md={{ span: 16 }}>
              <div className="upcoming-appointments">
                <h2>Upcoming Appointments</h2>
                <div className="upcoming-appointments-content">
                  <Row gutter={[16, 16]}>
                    {appointments.map((appointment, index) => {
                      return (
                        <Col
                          xs={{ span: 24 }}
                          sm={{ span: 24 }}
                          md={{ span: 8 }}
                        >
                          <AppointmentCard
                            key={index}
                            date={convertISODate(appointment.appointment_date)}
                            time={appointment.appointment_time}
                            status={appointment.status}
                          />
                        </Col>
                      );
                    })}
                  </Row>
                  <Col>
                    <StyledLink to="/appointments/scheduled">
                      All Appointments
                    </StyledLink>
                  </Col>
                </div>
              </div>
            </Col>
          </Row>
          <div className="pet-container">
            <Row gutter={[16, 16]}>
              {pets.map((pet, index) => (
                <PetCard
                  key={pet.id}
                  showPetModal={showModal1}
                  closePetModal={setIsModalVisible1}
                  pet={pet}
                  petIndex={index}
                  setCurrentPetSelected={setCurrentPetSelected}
                />
              ))}
              <Modal
                title="Pet Info"
                visible={isModalVisible1}
                onOk={handleOk1}
                onCancel={handleCancel1}
              >
                {pets.length && (
                  <>
                    <p>Name: {pets[currentPetSelected].pet_name}</p>
                    {pets[currentPetSelected].color && (
                      <p>Color: {pets[currentPetSelected].color}</p>
                    )}
                    {pets[currentPetSelected].date_of_birth && (
                      <p>
                        DOB:{' '}
                        {convertISODate(pets[currentPetSelected].date_of_birth)}
                      </p>
                    )}
                  </>
                )}
              </Modal>
              <CustomerAddPet />
            </Row>
          </div>
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
