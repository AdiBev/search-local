import React from "react";
import { render } from "@testing-library/react";
import { Input } from "../Input";

test("Renders Input component", () => {
  const { container } = render(<Input />);
  expect(container).toBeTruthy();
});
