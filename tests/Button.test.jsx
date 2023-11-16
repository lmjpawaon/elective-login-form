import { render, screen } from '@testing-library/react';
// import App from "../src/App";
import LoginButton from '../src/components/LoginBtn';
import { vi } from 'vitest';


describe('Button', () => {
  it('renders btn', () => {
    render(<LoginButton/>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it('renders btn disabled', () => {
    render(<LoginButton isDisabled={true}/>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

//   it('should be able to click btn', () => {
//     const fn = vi.fn()
//     render(<LoginButton onClick={fn}/>);
//     expect(fn).toHaveBeenCalled();
//   });
});