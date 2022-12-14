import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Movie Night!', () => {
  render(<App />);
  const title = screen.getByText(/Movie Night!/i);
  expect(title).toBeInTheDocument();
});
