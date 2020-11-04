import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import './profileList.scss';
import ProfileCard from './ProfileCard';

function RenderProfileListPage(props) {
  const [searched, setSearched] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredChars = props.data.filter(char =>
      char.name.toLowerCase().includes(searched)
    );

    setFiltered(filteredChars);
  }, [searched, props.data]);

  function handleChange(e) {
    e.preventDefault();
    setSearched(e.target.value);
  }

  return (
    <div className="profile-container">
      <p>
        <Link to="/">Home</Link>
      </p>

      <div className="middle-content">
        <h1>Meet our Groomers</h1>
        <SearchForm value={searched} handleChange={handleChange} />
        <Link exact to="/map-view">
          <div className="map-link">Switch to map view</div>
        </Link>
      </div>

      <div className="profile-list">
        {filtered.map(item => (
          <ProfileCard item={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
  };
};

export default connect(mapStateToProps, {})(RenderProfileListPage);

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderProfileListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      avatarUrl: PropTypes.string,
      created_at: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.string,
      updated_at: PropTypes.string,
    })
  ).isRequired,
};
