import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { Hero } from './Hero';
import { Services } from './Services';
import { AboutGroomer } from './AboutGroomer';
import { useParams } from 'react-router';
import { useOktaAuth } from '@okta/okta-react';
import { getBusinessProfileData } from '../../../api';

const GroomerProfilePage = props => {
  console.log(props);
  const { id } = useParams();
  const { authState } = useOktaAuth();
  useEffect(() => {
    if (id) {
      getBusinessProfileData(authState, id);
    }
  }, []);

  return (
    <div className="container-fluid">
      <Row
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        gutter={[16, 16]}
      >
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }}>
          <Hero />
        </Col>
        <Col>
          {props.businessProfile &&
          Object.keys(props.businessProfile).length > 0 ? (
            <Services profile={props.businessProfile} />
          ) : (
            <Services profile={props.businessProfile} />
          )}
        </Col>
        <Col>
          {props.businessProfile &&
          Object.keys(props.businessProfile).length > 0 ? (
            <AboutGroomer id={id} profile={props.businessProfile} />
          ) : (
            <AboutGroomer id={id} profile={props.businessProfile} />
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    businessProfile: ownProps.businessProfile
      ? ownProps.businessProfile
      : state.businessProfile,
  };
};

export default connect(mapStateToProps, {})(GroomerProfilePage);
