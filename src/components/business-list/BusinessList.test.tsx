import React from "react";
import { RecoilRoot } from "recoil";
import { BusinessList } from "./BusinessList";
import { render } from "@testing-library/react";

describe("BusinessList", () => {
  const Wrapper = () => (
    <RecoilRoot>
      <BusinessList />
    </RecoilRoot>
  );

  test("Render component", () => {
    const { container } = render(<Wrapper />);
    expect(container).toBeTruthy();
  });
});
