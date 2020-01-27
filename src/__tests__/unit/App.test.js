import React from 'react';
import { render } from '@testing-library/react';
import App from 'app/App/App';

test('if app contains star wars universe title', () => {
  const { getByText } = render(<App />);
  expect(getByText('star wars universe')).toBeInTheDocument()
});
