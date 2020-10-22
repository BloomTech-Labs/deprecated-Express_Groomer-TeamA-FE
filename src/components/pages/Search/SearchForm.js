import React from 'react';
import { FormButton } from '../../common';

function SearchForm(props) {
  return (
    <div>
      <form>
        <input
          placeholder={'Search By Name  '}
          value={props.value}
          onChange={props.handleChange}
          onSubmit={props.handleSubmit}
        />

        <FormButton isDisabled={false} buttonText={'Submit'} />
      </form>
    </div>
  );
}

export default SearchForm;
