import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

test("Rendering Steps", () => {
  render(<App />); // Rendering the App
  const step1 = screen.getByTestId("step1");
  const step2 = screen.getByTestId("step2");
  const step3 = screen.getByTestId("step3");

  expect(step1).toBeInTheDocument();
  expect(step2).toBeInTheDocument();
  expect(step3).toBeInTheDocument();
});

test("renders cards", () => {
  render(<App />);
  const card = document.querySelector(".card-block");
  expect(card).toBeInTheDocument();
});
