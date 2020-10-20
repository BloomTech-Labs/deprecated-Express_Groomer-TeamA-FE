import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormInput from '../../common/FormInput';
import Axios from 'axios';
import { connect } from 'react-redux';
// import { populateCustomer } from '../../../state/actions';

const RenderEditCustomerProfile = props => {
  const [info, setInfo] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  // const submitHandler = () => {
  //   Axios
  //   .post('', info)
  //   .then(res => {
  //       .push(res);
  //       props.populateCustomer(info)
  //       props.history.push("/Profile")
  //   })
  // };

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      {/* <form onSubmit={submitHandler}> */}
      {/* <FormInput placeholder={user && user.name} name={info.name} labelId="Name:" />
          <FormInput placeholder={user && user.email} name={info.email} labelId="Email:" />
          <FormInput placeholder={user && user.zone} name={info.zone} labelId="Zone:" />
          <FormInput placeholder={user && user.pet_name} name={info.pet_name} labelId="Pet Name:" />
          <FormInput placeholder={user && user.pet_type} name={info.pet_type} labelId="Pet Type:" />
          <FormInput placeholder={user && user.pet_bio} name={info.pet_bio} labelId="Pet Bio:" />
          <FormInput placeholder={user && user.pet_pic} name={info.pet_pic} labelId="Pet Pic:" /> */}
      {/* </form> */}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    customerInfo: state.customerInfo,
  };
};

export default connect(mapStateToProps, {
  /*populateCustomer*/
})(RenderEditCustomerProfile);

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderEditCustomerProfile.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
