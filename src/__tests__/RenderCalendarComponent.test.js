import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { AppointmentPage } from '../components/pages/Appointments/index';
import '@testing-library/jest-dom/extend-expect';

// Window code below is in to handle "TypeError: window.matchMedia is not a function error"

window.matchMedia =
  window.matchMedia ||
  function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {},
    };
  };

describe('<RenderLandingPage /> test suite', () => {
  test('LandingPage component successfully renders', () => {
    render(
      <Router>
        <AppointmentPage />
      </Router>
    );
  });
});
