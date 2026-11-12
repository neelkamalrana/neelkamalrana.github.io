import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InteractiveBackground from "./InteractiveBackground";

let reduced = false;
let fine = true;
let frame;
beforeEach(() => {
  reduced = false;
  fine = true;
  window.matchMedia = jest.fn((query) => ({
    matches: query.includes("reduced-motion") ? reduced : fine,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  }));
  jest
    .spyOn(HTMLCanvasElement.prototype, "getContext")
    .mockReturnValue({
      clearRect: jest.fn(),
      setTransform: jest.fn(),
      beginPath: jest.fn(),
      arc: jest.fn(),
      fill: jest.fn(),
      moveTo: jest.fn(),
      lineTo: jest.fn(),
      stroke: jest.fn(),
    });
  frame = jest.spyOn(window, "requestAnimationFrame").mockReturnValue(1);
  jest.spyOn(window, "cancelAnimationFrame").mockImplementation(() => {});
});
afterEach(() => {
  cleanup();
  jest.restoreAllMocks();
});

test("reduced motion renders a static background without an animation loop", () => {
  reduced = true;
  const { container } = render(<InteractiveBackground />);
  expect(container.querySelector("canvas")).toHaveAttribute(
    "data-motion",
    "static",
  );
  expect(frame).not.toHaveBeenCalled();
});
test("touch-only devices do not start an animation loop", () => {
  fine = false;
  render(<InteractiveBackground />);
  expect(frame).not.toHaveBeenCalled();
});
test("the visitor can pause and resume the decorative animation", () => {
  const { container } = render(<InteractiveBackground />);
  expect(container.querySelector("canvas")).toHaveAttribute(
    "data-motion",
    "active",
  );
  userEvent.click(screen.getByRole("button", { name: /Pause background/ }));
  expect(container.querySelector("canvas")).toHaveAttribute(
    "data-motion",
    "static",
  );
  expect(
    screen.getByRole("button", { name: /Resume background/ }),
  ).toHaveAttribute("aria-pressed", "true");
  userEvent.click(screen.getByRole("button", { name: /Resume background/ }));
  expect(container.querySelector("canvas")).toHaveAttribute(
    "data-motion",
    "active",
  );
});
