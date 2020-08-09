import React from "react";
import { render, screen } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import { RecoilRoot } from "recoil";

const Wrapper = () => (
  <RecoilRoot>
    <SearchBar />
  </RecoilRoot>
);

describe("SearchBar", () => {
  test("Renders input elements", async () => {
    render(<Wrapper />);
    const inputElements = await screen.getAllByRole("textbox");
    expect(inputElements).toHaveLength(2);
  });

  test("Render button element", async () => {
    render(<Wrapper />);
    const buttonElement = await screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
