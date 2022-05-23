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
  const [customerPet, setCustomerPet] = useState([]);
  const [businessProfileData, setBusinessProfileData] = useState([]);
  const [businessName, setBusinessName] = useState();

  console.log('PROPS', props);

  const { id } = useParams();

  useEffect(() => {
    getPetData();
    getBusinessData();
  }, []);

  useEffect(() => {
    console.log({ customerPet });
    console.log('biz info', businessName);
    setAppointment({ ...appointment, service_provider_name: businessName });
  }, [customerPet, businessName]);

  // useEffect(() => {
  //   if (id) {
  //     getBusinessProfileData(authState, id);
  //   }
  // }, []);

  const getPetData = async () => {
    const petData = await getCustomerPetsData(authState);
    setCustomerPet(petData.pets);
  };

  const getBusinessData = async () => {
    const businessData = await getBusinessProfileData(authState, id);
    setBusinessProfileData(businessData.services);
    setBusinessName(businessData.business_name);
    console.log('INSIDE FUNC', businessData);
  };

  const groomer = {
    id: id,
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;

  console.log('today', today);
  console.log('dd', dd);
  console.log('mm', mm);
  console.log('yyyy', yyyy);

  var date = new Date();
  var minutes = date.getMinutes();
  var hour = date.getHours();

  const [appointment, setAppointment] = useState({
    groomer_id: groomer.id,
    pet_id: null,
    location_service_id: null,
    appointment_date_time: Math.floor(1812158),
    duration: 60,
    status: 'Pending',
    service_provider_name: '',
  });
  const { Option } = Select;

  console.log('APPT', appointment);
  // useEffect(() => {
  //   console.log(appointment);
  // }, [appointment]);

  function onSelectChange(value) {
    console.log('Calendar selected date', value);
    setSelectedDate(value);
  }

  const onChange = value => {
    setAppointment({ ...appointment, pet_id: value });
  };
  const onServiceChange = value => {
    setAppointment({ ...appointment, location_service_id: value });
  };

  const onAppointmentTimeChange = value => {
    const newValue = value.valueOf();
    setAppointment({ ...appointment, appointment_date_time: newValue });
    console.log('Appt time value', newValue);
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
                    {customerPet.map(pet => {
                      return <Option value={pet.id}>{pet.pet_name}</Option>;
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Select Service">
                  <Select name="location_service_id" onChange={onServiceChange}>
                    {businessProfileData.map(service => {
                      return (
                        <Select.Option value={service.id}>
                          {service.service_description}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>
                <Form.Item label="Select Time">
                  <TimePicker
                    defaultValue={moment(Date.now(), format)}
                    format={format}
                    onChange={onAppointmentTimeChange}
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
