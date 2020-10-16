import Form from 'antd/lib/form/Form';
import React from 'react';
import { FormButton, FormInput } from '../../common';

function SearchForm() {
  return (
    <div>
      <Form>
        <FormInput labelId={'Search By Name  '} />
        <FormButton isDisabled={false} buttonText={'Submit'} />
      </Form>
    </div>
  );
}

export default SearchForm;
