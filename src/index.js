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

import { NotFoundPage } from './components/pages/NotFound';
import { ExampleListPage } from './components/pages/ExampleList';
import { HomePage } from './components/pages/Home';
import { ProfileListPage } from './components/pages/ProfileList';
import { LoginPage } from './components/pages/Login';
import { config } from './utils/oktaConfig';
import { LoadingComponent } from './components/common';
import { EditCustomerProfile } from './components/pages/EditCustomerProfile';
import { Profile } from './components/pages/Profile';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import { appReducer } from './state/reducers/appReducer';
import MapBox from './components/Map/MapBox';
import Footer from './components/Footer/Footer';

export const store = createStore(appReducer);

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
        <Route path="/login" component={LoginPage} />
        <Route path="/implicit/callback" component={LoginCallback} />
        {/* any of the routes you need secured should be registered as SecureRoutes */}
        <SecureRoute
          path="/"
          exact
          component={() => <HomePage LoadingComponent={LoadingComponent} />}
        />
        <SecureRoute
          path="/profile/:id"
          exact
          render={props => (
            <Profile {...props} LoadingComponent={LoadingComponent} />
          )}
        />
        <SecureRoute path="/example-list" component={ExampleListPage} />
        <SecureRoute path="/profile-list" component={ProfileListPage} />
        <SecureRoute
          path="/edit-profile/:id"
          render={props => <EditCustomerProfile {...props} />}
        />
        <SecureRoute path="/map-view" component={MapBox} />
        <Route component={NotFoundPage} />
      </Switch>

      <Footer />
    </Security>
  );
}
