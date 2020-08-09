import React from "react";
import { render } from "@testing-library/react";
import { Home } from "./Home";

const apiStatus = { loading: true, error: false };
const noResults = false;
const dataLoaded = false;

describe("Home", () => {
  test("Render component", () => {
    const { container } = render(
      <Home
        apiStatus={apiStatus}
        noResults={noResults}
        dataLoaded={dataLoaded}
      />
    );

    expect(container).toBeTruthy();
  });
});
