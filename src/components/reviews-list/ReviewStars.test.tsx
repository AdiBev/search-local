import React from "react";
import { render, screen } from "@testing-library/react";
import { ReviewStars } from "./ReviewStars";

const reviewRating = 4;
const reviewCount = 5;

const Wrapper = () => (
  <ReviewStars reviewRating={reviewRating} reviewCount={reviewCount} />
);

describe("ReviewStars", () => {
  test("Display stars image", async () => {
    render(<Wrapper />);
    const imgElement = await screen.getByAltText(`${reviewRating} stars`);
    expect(imgElement).toBeInTheDocument();
  });

  test("Display total review count", async () => {
    render(<Wrapper />);
    const totalReviews = await screen.getByText(`${reviewCount} reviews`);
    expect(totalReviews).toBeInTheDocument();
  });
});
