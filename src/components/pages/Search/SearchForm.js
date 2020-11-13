import React from 'react';
import { FormButton } from '../../common';
import { Tooltip } from 'antd';
import './searchForm.scss';

function SearchForm(props) {
  return (
    <form>
      <Tooltip title="Search by Groomer Name">
        <input
          data-testid="buttonText"
          placeholder={'Search By Name  '}
          value={props.value}
          onChange={props.handleChange}
          onSubmit={props.handleSubmit}
        />
      </Tooltip>
    </form>
  );
}

export default SearchForm;
