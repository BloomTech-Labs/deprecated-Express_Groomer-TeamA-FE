import React from 'react';
import { FormButton } from '../../common';
import { Tooltip } from 'antd';
import './searchForm.scss';

function SearchForm(props) {
  return (
    <form>
      <Tooltip data-testid="tip-text" title="Search by Groomer Name">
        <input
          placeholder={'Search By Name  '}
          value={props.value}
          onChange={props.handleChange}
          onSubmit={props.handleSubmit}
        />
        <button data-testid="buttonText">Submit</button>
      </Tooltip>
    </form>
  );
}

export default SearchForm;
