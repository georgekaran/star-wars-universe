import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from 'components/Button/Button';

it('should call on click', () => {
    const onClick = jest.fn();

    const { getByText } = render(<Button label="Increment" onClick={onClick} />)

    fireEvent.click(getByText(/Increment/i));
    expect(onClick).toHaveBeenCalled();
});