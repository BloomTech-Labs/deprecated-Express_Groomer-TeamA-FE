import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../Navigation/NavBar';

function RenderLandingPage(props) {
  return (
    <div>
      <NavBar></NavBar>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
    </div>
  );
}
export default RenderLandingPage;
