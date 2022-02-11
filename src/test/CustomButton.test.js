import { render, screen } from "@testing-library/react";
import CustomButton from "./../components/CustomButton";

test("Render custom button in the DOM", () => {
  render(<CustomButton />);
  const customButton = screen.getByRole("button");
  expect(customButton).toBeInTheDocument();
});

test("Button text should be same as props", () => {
  render(<CustomButton text="Generate Random User" />);
  const customButton = screen.getByRole("button");
  expect(customButton).toHaveTextContent("Generate Random User");
});

test("Throw an error when it clicks with out passing onClick function", () => {
    render(<CustomButton text="Generate Random User" />);
    const customButton = screen.getByRole("button");
    expect(customButton).toBeInTheDocument();
    expect(() => customButton.click()).not.toThrow();
})

test("Not Throw error when clicking the button after passing onClick prop", () => {
    render(<CustomButton text="Generate Random User" onClick={() => {}} />);
    const customButton = screen.getByRole("button");
    expect(customButton).toBeInTheDocument();
    expect(() => customButton.click()).not.toThrow();
})

test("Increment value by one when button clicked", () => {
    const onClick = jest.fn();
    render(<CustomButton text="Generate Random User" onClick={onClick} />);
    const customButton = screen.getByRole("button");
    expect(customButton).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(0);
    customButton.click();
    expect(onClick).toHaveBeenCalledTimes(1);
})