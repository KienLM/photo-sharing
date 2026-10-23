import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the photo sharing user list", () => {
  render(<App />);
  expect(screen.getAllByText("Ian Malcolm").length).toBeGreaterThan(0);
  expect(screen.getByText("Lê Mạnh Kiên")).toBeInTheDocument();
});
