import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../../../../ui/atoms/buttons';
import '@testing-library/jest-dom';

test("Does the button render correctly?", () => {
    render(<Button/>);

    const buttonElement = screen.getByRole('button', { name: /Button/i });

    expect(buttonElement).toBeInTheDocument();
});

test("Clicks the button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Login</Button>);

    const buttonElement = screen.getByRole('button', { name: /Login/i });

    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1);

});