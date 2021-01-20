import React from 'react';

const AppointmentCard = ({ date, time, status }) => {
  return (
    <div className="current-appointments">
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Status: {status}</p>
    </div>
  );
};

export default AppointmentCard;
