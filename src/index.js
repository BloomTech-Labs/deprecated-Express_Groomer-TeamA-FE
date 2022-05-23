import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';
import { NavBar } from './components/Navigation/NavBar';
import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';
import { ScheduledAppointments } from './components/pages/ScheduledAppointments';
import { AppointmentInfo } from './components/pages/AppointmentInfo';
import { LandingPage } from './components/pages/Landing';
import { LandingPageForGroomers } from './components/pages/LandingForGroomers';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { AppointmentPage } from './components/pages/Appointments';
import { config } from './utils/oktaConfig';
import { LoadingSpinner } from './components/common';
import { EditProfile } from './components/pages/EditProfile';
import { Profile } from './components/pages/Profile';
import GroomerProfilePage from './components/pages/GroomerProfile/GroomerProfilePage';
import { GroomerServicesPage } from './components/pages/GroomerProfile/GroomerServicesPage';
import RenderGroomerAppointmentDashboard from './components/pages/Appointments/RenderGroomerAppointmentDashboard';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import { appReducer } from './state/reducers/appReducer';
import MapBox from './components/Map/MapBox';
import Footer from './components/Footer/Footer';
import './globalStyles.css';

import 'antd/dist/antd.css';

export const store = createStore(appReducer, devToolsEnhancer());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </Provider>,
  document.getElementById('root')
);

function App() {
  // The reason to declare App this way is so that we can use any helper functions we'd need for business logic, in our case auth.
  // React Router has a nifty useHistory hook we can use at this level to ensure we have security around our routes.
  const history = useHistory();

  const authHandler = () => {
    // We pass this to our <Security /> component that wraps our routes.
    // It'll automatically check if userToken is available and push back to login if not :)
    history.push('/login');
  };

  return (
    <div className="app-container">
      <Security {...config} onAuthRequired={authHandler}>
        <NavBar />
        <div className="content-wrapper">
          <Switch>
            <Route path="/login" component={LoginPage} />{' '}
            {/** ISSUE: AFTER LOGIN USER GETS REDIRECTED TO LandingPage */}
            <Route path="/implicit/callback" component={LoginCallback} />
            {/* any of the routes you need secured should be registered as SecureRoutes */}
            <SecureRoute
              path="/myprofile"
              exact
              render={props => (
                <Profile {...props} LoadingComponent={LoadingSpinner} />
              )}
            />
            <SecureRoute path="/example-list" component={ExampleListPage} />
            <SecureRoute path="/profile-list" component={ProfileListPage} />
            <SecureRoute
              path="/editprofile"
              render={props => <EditProfile {...props} />}
            />
            {/* <SecureRoute path="/map-view" component={MapBox} /> */}
            <Route exact path="/" component={LandingPage} />{' '}
            {/** ISSUE: AFTER LOGIN USER GETS REDIRECTED TO LandingPage */}
            <Route path="/groomers" component={LandingPageForGroomers} />
            <SecureRoute
              exact
              path="/appointments/scheduled"
              component={ScheduledAppointments}
            />
            <SecureRoute
              exact
              path="/appointments/scheduled/:id"
              component={AppointmentInfo}
            />
            <SecureRoute
              exact
              path="/groomer/:id/groomer-services"
              component={GroomerServicesPage}
            />
            <SecureRoute
              exact
              path="/groomer/:id/schedule"
              component={RenderGroomerAppointmentDashboard}
            />
            <SecureRoute path="/groomer/:id" component={GroomerProfilePage} />
          </Switch>
        </div>
        <Footer />
      </Security>
    </div>
  );
}
