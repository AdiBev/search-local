import React from "react";
import { Navbar } from "./Navbar";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { SearchBar } from "./SearchBar";

const Wrapper = () => (
  <RecoilRoot>
    <Navbar />
  </RecoilRoot>
);

describe("Navbar", () => {
  test("Displays Search Local text", async () => {
    render(<Wrapper />);
    const text = await screen.getByRole("heading", { name: "Search Local" });
    expect(text).toBeInTheDocument();
  });

  test("Render SearchBar component", () => {
    render(<Wrapper />);
    expect(<SearchBar />).toBeTruthy();
  });
});
