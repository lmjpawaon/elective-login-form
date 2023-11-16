import { render, screen } from '@testing-library/react';
import App from "../src/App";


describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByTestId("app-container");
    expect(headline).toBeInTheDocument();
  });
});