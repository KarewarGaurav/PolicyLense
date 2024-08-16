import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MovieReview brand name', () => {
  render(<App />);
  const brandElement = screen.getByText(/MovieReview/i);
  expect(brandElement).toBeInTheDocument();
});
