import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchForm from '../components/pages/Search/SearchForm';

afterEach(cleanup);

it('Should take a snapshot', () => {
  const { getByTestId } = render(<SearchForm />);
  expect(getByTestId('tip-text')).toHaveTextContent('Submit');
});
