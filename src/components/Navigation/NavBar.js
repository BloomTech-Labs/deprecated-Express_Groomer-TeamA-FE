import React from 'react';
import { Link } from 'react-router-dom';
// Empty NavBar component to be populated and used later

function NavBar() {
  return (
    <div>
      <div>
        <Link className="title" to="/home">
          <h1>Express Groomer</h1>
        </Link>
      </div>

      <nav>
        <Link to="/groomers">For Groomers</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </div>
  );
}

export default NavBar;
