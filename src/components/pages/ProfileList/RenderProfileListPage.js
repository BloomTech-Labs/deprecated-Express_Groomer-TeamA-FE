import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SearchForm from '../Search/SearchForm';
import { connect } from 'react-redux';
import { Image, Card } from 'antd';

const { Meta } = Card;

function RenderProfileListPage(props) {
  const [searched, setSearched] = useState('');
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const filteredChars = props.data.filter(char =>
      char.name.toLowerCase().includes(searched)
    );

    setFiltered(filteredChars);
  }, [searched, props.data]);

  console.log(filtered);

  function handleChange(e) {
    e.preventDefault();
    setSearched(e.target.value);
  }

  return (
    <div>
      <p>
        <Link to="/">Home</Link>
      </p>
      <SearchForm value={searched} handleChange={handleChange} />
      {props.filtered_profiles.map(item => (
        <Card key={item.id}>
          <Image src={item.avatarUrl} alt={item.name} />
          <Meta title={item.name} description={'user or groomer'}></Meta>
        </Card>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    profiles: state.profiles,
    filtered_profiles: state.filtered_profiles,
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
};
