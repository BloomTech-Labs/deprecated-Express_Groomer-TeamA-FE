import React from 'react';
/// Ant Design ///
// Dropdown ///

// Form
//import VerticalForm from '../../common/VerticalForm';

const AppointmentCard = ({ date, location, pet }) => {
  return (
    <div className="current-appointments">
      <p>Date:{date}</p>
      <p>Location: {location}</p>
      <p>Pet: {pet}</p>
    </div>
  );
};

export default AppointmentCard;
