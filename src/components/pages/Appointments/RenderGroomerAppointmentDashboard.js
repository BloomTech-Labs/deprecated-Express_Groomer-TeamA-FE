import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Calendar, Button, Card, TimePicker } from 'antd';
import { CalendarSize, WhiteSpaceForCalendar } from './CalendarStyles';
import moment from 'moment';
import {
  AppointmentDiv,
  AppointmentScheduledFont,
  AppointmentHeader,
  CalendarButtonStyle,
} from './AppointmentContainerStyles';
import {
  createAppointmentData,
  getBusinessProfileData,
  getUserProfileData,
  getCustomerPetsData,
  getAppointmentData,
} from '../../../api';
import { useOktaAuth } from '@okta/okta-react';
import { Form, Select } from 'antd';

const appointmentWindowWidth = 300;
const format = 'HH:mm';

function onPanelChange(value, mode) {
  console.log(value.format('YYYY-MM-DD'), mode);
}

function RenderGroomerAppointmentDashboard(props) {
  const [selectedDate, setSelectedDate] = useState(Date(Date.now()));
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], []);

  console.log('PROPS', props);

  const { id } = useParams();

  console.log('id', id);

  // useEffect(() => {
  //   if (id) {
  //     getBusinessProfileData(authState, id);
  //   }
  // }, []);

  const groomer = {
    id: '00ultwew80Onb2vOT4x6',
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  var date = new Date();
  var minutes = date.getMinutes();
  var hour = date.getHours();

  const [appointment, setAppointment] = useState({
    groomer_id: groomer.id,
    pet_id: 0,
    location_service_id: 0,
    appointment_date_time: 16121585,
    duration: 60,
    status: 'Pending',
    service_provider_name: 'Pro Groomer',
  });
  const { Option } = Select;

  console.log('APPT', appointment);
  // useEffect(() => {
  //   console.log(appointment);
  // }, [appointment]);

  function onSelectChange(value) {
    setSelectedDate(value);
  }

  // useEffect(() => {
  //   memoAuthService
  //     .getUser()
  //     .then(info => {
  //       createAppointmentData(authState, appointment);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // });

  const pets = [
    {
      id: 0,
      name: 'John',
    },
    {
      id: 2,
      name: 'Jane',
    },
    {
      id: 3,
      name: 'Jessica',
    },
  ];

  const services = [
    {
      id: 0,
      name: 'Nail trimming',
    },
    {
      id: 2,
      name: 'Shampooing',
    },
    {
      id: 3,
      name: 'Combo Service',
    },
  ];

  const onChange = value => {
    setAppointment({ ...appointment, pet_id: value });
  };
  const onServiceChange = value => {
    setAppointment({ ...appointment, location_service_id: value });
  };

  const onAppointmentTimeChange = value => {
    setAppointment({ ...appointment, appointment_date_time: 1612158200 });
  };

  console.log(authState);
  return (
    <Layout>
      <CalendarSize>
        <WhiteSpaceForCalendar>
          <Calendar
            onPanelChange={onPanelChange}
            onSelect={onSelectChange}
            fullscreen={false}
          />
        </WhiteSpaceForCalendar>
        <AppointmentDiv>
          <AppointmentScheduledFont>
            {AppointmentHeader}
          </AppointmentScheduledFont>
          <CalendarButtonStyle>
            <Card
              title={selectedDate.toString()}
              extra={<a href="#">More</a>}
              style={{ width: appointmentWindowWidth }}
            >
              <Form>
                <Form.Item label="Select Pet">
                  <Select name="pet_id" onChange={e => onChange(e)}>
                    {pets.map(pet => {
                      return <Option value={pet.id}>{pet.name}</Option>;
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Select Service">
                  <Select name="location_service_id" onChange={onServiceChange}>
                    {services.map(service => {
                      return (
                        <Select.Option value={service.id}>
                          {service.name}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Select Time">
                  <TimePicker
                    defaultValue={moment(Date.now(), format)}
                    format={format}
                    onChange={() => onAppointmentTimeChange()}
                  />
                </Form.Item>
              </Form>
              <Button
                onClick={e => {
                  e.preventDefault();
                  createAppointmentData(authState, appointment);
                }}
                type="primary"
                size="large"
                style={{ background: 'orange', borderColor: 'white' }}
              >
                Add Appointment
              </Button>
            </Card>
            <br />
          </CalendarButtonStyle>
        </AppointmentDiv>
      </CalendarSize>
    </Layout>
  );
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments,
    currentUser: state.currentUser,
    pets: state.pets,
  };
};

export default connect(mapStateToProps, {})(RenderGroomerAppointmentDashboard);
