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
        {/* button below is for testing purposes only and has no functionality  */}
        <button data-testid="tip-text">Submit</button>
      </Tooltip>
    </form>
  );
}

export default SearchForm;
