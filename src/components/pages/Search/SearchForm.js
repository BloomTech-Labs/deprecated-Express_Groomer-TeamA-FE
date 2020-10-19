import Form from 'antd/lib/form/Form';
import React from 'react';
import { FormButton, FormInput } from '../../common';

function SearchForm(props) {
  return (
    <div>
      <Form>
        <input
          placeholder={'Search By Name  '}
          value={props.value}
          onChange={props.handleChange}
          onSubmit={props.handleSubmit}
        />

        <FormButton isDisabled={false} buttonText={'Submit'} />
      </Form>
    </div>
  );
}

export default SearchForm;
