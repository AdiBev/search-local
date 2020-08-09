import React from "react";
import { render, screen } from "@testing-library/react";
import { ReviewList } from "./ReviewList";

const reviewList = [
  {
    user: {
      image_url: "http://yell.com",
      name: "Adi",
    },
    rating: 4,
    text: "Great place!",
    url: "http://yell.review.com",
  },
  {
    user: {
      image_url: "http://yell.com",
      name: "Misia",
    },
    rating: 5,
    text: "Awesome food!",
    url: "http://yell.review.com",
  },
];

describe("ReviewList", () => {
  test("Display props data", async () => {
    render(
      <ReviewList
        name="Adi Business"
        reviewsUrl="http://reviews.yell.review.com"
        reviewList={reviewList}
      />
    );
    const businessName = await screen.getByText("Adi Business");
    expect(businessName).toBeInTheDocument();
  });
});
