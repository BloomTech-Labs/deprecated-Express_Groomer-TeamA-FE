import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button, FormInput } from '../../../components/common/index';
import './profile.css';

const RenderCustomerProfile = ({ userInfo }) => {
  // UseEffect to set user info in state

  useEffect(() => {
    setUserFormData({
      name: userInfo.name,
      email: userInfo.email,
    });
  }, [userInfo]);

  // User Form Data
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
  });

  // Destructure State
  const { name, email } = userFormData;
  // Display User Info Inputs
  const [displayUserInfoInputs, toggleUserInfoInputs] = useState(false);

  // Save onChange
  const onChange = e => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  // Edit User Info Submit Function
  const onSubmit = e => {
    e.preventDefault();
    setUserFormData(userFormData);
  };

  return (
    <div>
      <span className="welcome">
        <Link to="/">Home</Link>
        <p>Welcome, customer!</p>
      </span>
      {userInfo && (
        <div className="top-profile-container">
          <Row gutter={[16, 16]}>
            <Col style={{ border: '1px blue solid' }} span={12}>
              <div>
                <Avatar size={64} icon={<UserOutlined />} />
                {!displayUserInfoInputs ? (
                  <Fragment>
                    <p style={{ marginBottom: '0px' }}>Username: {name}</p>
                    <p>Email: {email}</p>
                    <div>
                      <Button
                        buttonText="Edit"
                        handleClick={() => {
                          toggleUserInfoInputs(!displayUserInfoInputs);
                        }}
                      >
                        Edit
                      </Button>
                    </div>
                  </Fragment>
                ) : (
                  <Fragment>
                    <form className="form" onSubmit={e => onSubmit(e)}>
                      <p>
                        Username:{' '}
                        <FormInput
                          onChange={e => onChange(e)}
                          type="text"
                          value={name}
                          name="name"
                        />
                      </p>
                      <p>
                        Email:{' '}
                        <FormInput
                          onChange={e => onChange(e)}
                          type="text"
                          value={email}
                          name="email"
                        />
                      </p>
                      <div>
                        <Button
                          buttonText="Save"
                          handleClick={() => {
                            toggleUserInfoInputs(!displayUserInfoInputs);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </form>
                  </Fragment>
                )}
              </div>
            </Col>
            <Col style={{ border: '1px blue solid' }} span={12}>
              <div></div>
            </Col>
          </Row>
          {/* <h1>{userInfo.name}</h1>
          <h2>{userInfo.email}</h2>
          <img id="profile-img" src={userInfo.avatarUrl} alt="awesome photo" /> */}
        </div>
      )}
    </div>
  );
};

export default RenderCustomerProfile;
