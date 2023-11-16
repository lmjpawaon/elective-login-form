import { render, screen, fireEvent} from '@testing-library/react';
import App from "../src/App";
import { expect, test } from 'vitest';

test('Should Render App', () => {
      render(<App />);
      const headline = screen.getByTestId("app-container");
      expect(headline).toBeInTheDocument();
});

test('Enable Login Button if the TextInput are typed', () => {
      render(<App />);
      
      // Get the textboxes and the button
      const usernameInput = screen.getByPlaceholderText('Username');
      const passwordInput = screen.getByPlaceholderText('Password');
      const loginButton = screen.getByText('Login');
  
      // Disable Login Button
      expect(loginButton).toBeDisabled();
  
      // Type into the username textbox
      fireEvent.change(usernameInput, { target: { value: 'testusername' } });
  
      // Expect the Login Button to still be disabled
      expect(loginButton).toBeDisabled();
  
      // Type into the password textbox
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
  
      // Login Button should be clickable now
      expect(loginButton).not.toBeDisabled();
});
  