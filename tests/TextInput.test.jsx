import { render, screen, fireEvent } from '@testing-library/react';
import PasswordInput from '../src/components/PasswordInput';
import UsernameInput from '../src/components/UsernameInput';
import { expect, test} from 'vitest';

// USERNAME
test('Should Render UsernameInput', () => {
    render(<UsernameInput />);
    const input = screen.getByPlaceholderText('Username');
    expect(input).toBeInTheDocument();
});

test('Should be able to type', () => {
    render(<UsernameInput />);
    const input = screen.getByPlaceholderText('Username');
    fireEvent.change(input, { target: { value: 'testusername' } });
    expect(input.value).toBe('testusername');
});

test('Should render the label', () => {
    render(<UsernameInput />);
    const label = screen.getByText('Username');
    expect(label).toBeInTheDocument();
});

// PASSWORD
test('Should Render PasswordInput', () => {
    render(<PasswordInput />);
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeInTheDocument();
});

test('Should be able to type', () => {
    render(<PasswordInput />);
    const input = screen.getByPlaceholderText('Password');
    fireEvent.change(input, { target: { value: 'testpassword' } });
    expect(input.value).toBe('testpassword');
});

test('Should render the label', () => {
    render(<PasswordInput />);
    const label = screen.getByText('Password');
    expect(label).toBeInTheDocument();
});