import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import PersonController from "../components/PersonController";

const server = setupServer(
  rest.get("https://randomuser.me/api/", (req, res, ctx) => {
    return res(
      ctx.json({
        results: [
          {
            gender: 'male',
            name: {
              first: 'Biruk',
              last: 'Endris'
            },
            picture: {
              large: 'large picture display her'
            },
            dob: {
              date: 'my birth date',
            },
            location: {
              street: 'my street',
              city: 'my city',
            },
            email: 'my email',
            phone: 'my phone',        
          }]
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());


test("Render loading text on the dom for the first time", () => {
  render(<PersonController />);
  const loadingText = screen.getByText("Loading...");
  expect(loadingText).toBeInTheDocument();
});
test("Render the data after fetching data from api", async () => {
  render(<PersonController />);
  await waitFor(() => {
    expect(screen.getByText("Biruk")).toBeInTheDocument();
  });
})