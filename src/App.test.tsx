import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App";
import { RecoilRoot } from "recoil";

test("renders App component", () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
});
