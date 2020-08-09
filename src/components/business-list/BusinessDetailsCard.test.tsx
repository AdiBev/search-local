import React from "react";
import { BusinessDetailsCard } from "./BusinessDetailsCard";
import {
  render,
  screen,
  fireEvent,
  waitForElement,
} from "@testing-library/react";

const props = {
  photos: ["http://img.com"],
  name: "Hello business",
  phone: "0012345",
  reviews: [{ text: "Awesome stuff" }, { text: "Great place" }],
  rating: 4,
  review_count: 3,
  location: {
    address1: "1243 Yellow",
    postal_code: "1234X",
    country: "UK",
  },
};

describe("BusinessDetailsCard", () => {
  test("Displays props data", async () => {
    render(<BusinessDetailsCard businessDetails={props} />);
    const businessName = await screen.findByText(props.name, { exact: true });
    expect(businessName).toBeInTheDocument();
  });

  test("Renders ReviewList component", async () => {
    render(<BusinessDetailsCard businessDetails={props} />);
    fireEvent.click(screen.getByText("Read more reviews"));
    const buttonElem = await waitForElement(() =>
      screen.getByRole("button", { name: "Want more?" })
    );
    expect(buttonElem).toBeInTheDocument();
  });
});
