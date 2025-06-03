// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tag Input Demo heading', () => {
  render(<App />);
  const heading = screen.getByText(/Tag Input Demo/i);
  expect(heading).toBeInTheDocument();
});
