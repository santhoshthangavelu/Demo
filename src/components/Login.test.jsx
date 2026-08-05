import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login', () => {
  it('shows locked out user error', async () => {
    render(<Login />);
    const user = userEvent.setup();
    await user.type(screen.getByLabelText(/username/i), 'locked_out_user');
    await user.type(screen.getByLabelText(/password/i), 'secret_sauce');
    await user.click(screen.getByRole('button', { name: /login/i }));
    expect(screen.getByRole('alert')).toHaveTextContent('locked out');
  });
});
