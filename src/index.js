import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Switch,
} from 'react-router-dom';

import { Security, LoginCallback, SecureRoute } from '@okta/okta-react';
import 'antd/dist/antd.less';
import { ScheduledAppointments } from './components/pages/ScheduledAppointments';
import { AppointmentInfo } from './components/pages/AppointmentInfo';
import { LandingPage } from './components/pages/Landing';
import { LandingPageForGroomers } from './components/pages/LandingForGroomers';
import { ExampleListPage } from './components/pages/ExampleList';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { LoadingSpinner } from './components/common';
import { EditProfile } from './components/pages/EditProfile';
import { Profile } from './components/pages/Profile';
import { GroomerProfilePage } from './components/pages/GroomerProfile/GroomerProfilePage';
import { GroomerServicesPage } from './components/pages/GroomerProfile/GroomerServicesPage';
import { createStore, compose } from 'redux';
import { Home } from './components/pages/Home/HomeContainer';

import { Provider } from 'react-redux';
import { appReducer } from './state/reducers/appReducer';
import MapBox from './components/Map/MapBox';
import Footer from './components/Footer/Footer';

import 'antd/dist/antd.css';

export const store = createStore(
  appReducer,
  compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
);

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
    <Security {...config} onAuthRequired={authHandler}>
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
        <SecureRoute path="/map-view" component={MapBox} />
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
      </Switch>
      <Footer />
    </Security>
  );
}
