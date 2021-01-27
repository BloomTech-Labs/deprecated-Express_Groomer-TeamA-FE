import React from 'react';
import NavBar from '../../Navigation/NavBar';
import { Layout, Calendar, Button, Card, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { CalendarSize, WhiteSpaceForCalendar } from './CalendarStyles';
import {
  AppointmentDiv,
  AppointmentScheduledFont,
  AppointmentHeader,
  CalendarButtonStyle,
  PetNameIcon,
} from './AppointmentContainerStyles';

const iconSize = 50;
const appointmentWindowWidth = 300;

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

function RenderGroomerAppointmentDashboard(props) {
  return (
    <Layout>
      <NavBar />
      <CalendarSize>
        <WhiteSpaceForCalendar>
          <Calendar onPanelChange={onPanelChange} fullscreen={false} />
        </WhiteSpaceForCalendar>
        <AppointmentDiv>
          <AppointmentScheduledFont>
            {AppointmentHeader}
          </AppointmentScheduledFont>
          <CalendarButtonStyle>
            <Card
              title="MM/DD/YYYY - HH:MM"
              extra={<a href="#">More</a>}
              style={{ width: appointmentWindowWidth }}
            >
              <PetNameIcon>
                Pet Name
                <Avatar size={iconSize} icon={<UserOutlined />} />
              </PetNameIcon>
              <p>Service</p>
              <Button type="primary" size="large">
                Add Info
              </Button>
            </Card>
            <br />
            <Button type="primary" size="large">
              Add Appointment
            </Button>
          </CalendarButtonStyle>
        </AppointmentDiv>
      </CalendarSize>
    </Layout>
  );
}
export default RenderGroomerAppointmentDashboard;
