import PropTypes from 'prop-types';
import React from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import './spinner.css';

const antIcon = <LoadingOutlined style={{ fontSize: 64 }} spin />;

function LoadingSpinner(props) {
  return (
    <div className="container-fluid">
      <div style={{ minHeight: '100vh' }} className="spinner-container">
        <Spin style={{ fontSize: 40 }} indicator={antIcon} />
      </div>
    </div>
  );
}

export default LoadingSpinner;
