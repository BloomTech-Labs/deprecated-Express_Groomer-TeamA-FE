import React, { useRef, useState } from 'react';
import { Layout, Row, Col } from 'antd';
import { Hero } from './Hero';
import { Services } from './Services';
import { AboutGroomer } from './AboutGroomer';
import { FormProvider } from 'antd/lib/form/context';
export const GroomerProfilePage = () => {
  const { Content } = Layout;
  const contentStyle = {
    background: 'white',
  };
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
          <Services />
        </Col>
        <Col>
          <AboutGroomer />
        </Col>
      </Row>
    </div>
  );
};
