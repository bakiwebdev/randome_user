import { render, screen } from "@testing-library/react";
import ProfileCard from "./../components/ProfileCard";

test("Render ProfileCard in the DOM", () => {
  render(<ProfileCard />);
  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();
});
test("Should display image in the DOM", () => {
  const picture = {
    large: "https://avatars.githubusercontent.com/u/57604289?v=4",
  };
  render(<ProfileCard picture={picture} />);
  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();
  const img = screen.getByAltText("profile");
  expect(img).toBeInTheDocument();
});
test("Image Should have same source type", () => {
  const picture = {
    large: "https://avatars.githubusercontent.com/u/57604289?v=4",
  };
  render(<ProfileCard picture={picture} />);
  const img = screen.getByAltText("profile");
  expect(img.src).toBe(picture.large);
});
test("Image should not display if img file is null", () => {
  render(<ProfileCard />);
  const img = screen.queryByAltText("profile");
  expect(img).toBeNull();
})
test("Should display firstName in the DOM", () => {
  const name = {
    first: "John",
  };
  render(<ProfileCard name={name} />);
  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();
  const nameElement = screen.getByText("John");
  expect(nameElement).toBeInTheDocument();
});
test("Should display lastName in the DOM", () => {
  const name = {
    first: "John",
    last: "Doe",
  };
  render(<ProfileCard name={name} />);
  const profileCard = screen.getByTestId("profile-card");
  expect(profileCard).toBeInTheDocument();
  const nameElement = screen.getByText("Doe");
  expect(nameElement).toBeInTheDocument();
});