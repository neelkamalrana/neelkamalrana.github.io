import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  jest.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(null);
});
afterEach(() => {
  jest.restoreAllMocks();
});

test("unbuilt AI applications are labeled planned and have no fabricated demo links", () => {
  render(<App />);
  expect(screen.getAllByText("Planned")).toHaveLength(3);
  expect(
    screen.queryByRole("link", { name: /live demo|try demo/i }),
  ).not.toBeInTheDocument();
  expect(screen.getByText(/No results published yet/)).toBeInTheDocument();
});

test("mobile navigation opens and closes after selecting a section", () => {
  render(<App />);
  const menu = screen.getByRole("button", { name: /menu/i });
  userEvent.click(menu);
  expect(menu).toHaveAttribute("aria-expanded", "true");
  userEvent.click(
    within(screen.getByRole("navigation")).getByRole("link", { name: "Work" }),
  );
  expect(menu).toHaveAttribute("aria-expanded", "false");
});

test("resume is linked to the retained PDF and project plans explain evaluation", () => {
  render(<App />);
  expect(screen.getByRole("link", { name: /résumé/i })).toHaveAttribute(
    "href",
    "/resources/Neelkamal_Rana_Resume.pdf",
  );
  expect(screen.getAllByText("How I’ll evaluate it")).toHaveLength(3);
});
