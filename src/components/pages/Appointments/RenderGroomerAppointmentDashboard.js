import React from 'react';
import NavBar from '../../Navigation/NavBar';
import { Layout } from 'antd';
import { Calendar } from 'antd';
import { CalendarSize } from './CalendarStyles';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

function RenderGroomerAppointmentDashboard() {
  return (
    <Layout>
      <NavBar />
      <CalendarSize>
        <Calendar onPanelChange={onPanelChange} fullscreen={false} />
      </CalendarSize>
    </Layout>
  );
}
export default RenderGroomerAppointmentDashboard;
