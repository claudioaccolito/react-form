import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TestRenderer from "react-test-renderer"; // ES6

import {
  Header,
  Card,
  Question,
  SuccessIcon,
  YesAndNo,
} from "../components/common";

it("renders SuccesIcon correctly", async () => {
  render(<SuccessIcon />);
  expect(screen.getByTestId("success-icon")).toBeInTheDocument();
});

it("renders Header correctly", async () => {
  render(<Header />);
  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByText("Seminar")).toBeInTheDocument();
  expect(screen.getByText("Registration")).toBeInTheDocument();
});

it("renders Card correctly", async () => {
  render(
    <Card title="test-card" color="red" disabled={false}>
      <div>test simple card</div>
    </Card>
  );
  expect(screen.getByTestId("card")).toBeInTheDocument();
  expect(screen.getByTestId("card")).toHaveTextContent("test-card");
  expect(screen.getByTestId("card")).toHaveTextContent("test simple card");
});

it("renders Question correctly", async () => {
  render(<Question text="question example" />);
  expect(screen.getByTestId("question")).toBeInTheDocument();
  expect(screen.getByTestId("question")).toHaveTextContent("question example");
});

it("renders YesAndNo correctly", async () => {
  render(
    <YesAndNo isYes={false} onChangeRadio={() => console.log("example")} />
  );
  expect(screen.getByTestId("radio-btns")).toBeInTheDocument();
});

it("matches snapshot of SuccessIcon", async () => {
  const tree = TestRenderer.create(<SuccessIcon />).toJSON();

  expect(tree).toMatchSnapshot();
});
