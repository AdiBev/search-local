import React from "react";
import { render, screen } from "@testing-library/react";
import { ReviewInfoCard } from "./ReviewInfoCard";

const props = {
  user: {
    image_url: "http://yell.com",
    name: "Adi",
  },
  rating: 4,
  text: "Great place!",
  url: "http://yell.review.com",
};

describe("ReviewInfoCard", () => {
  test("Render props data", async () => {
    render(<ReviewInfoCard review={props} />);
    const userName = await screen.getByText(props.user.name, { exact: true });
    expect(userName).toBeInTheDocument();
  });
});
