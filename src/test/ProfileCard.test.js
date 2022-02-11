import { render, screen } from '@testing-library/react';
import ProfileCard from './../components/ProfileCard';

test('Render ProfileCard in the DOM', () => {
  render(<ProfileCard />);
  const profileCard = screen.getByRole("img");
  expect(profileCard).toBeInTheDocument();
});