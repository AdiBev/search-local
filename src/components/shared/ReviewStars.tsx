import React from "react";
import styled from "styled-components";
import { CaptionText } from "../themes/TypographyStyles";
import zero from "../../assets/yelp_stars/zero.png";
import one from "../../assets/yelp_stars/one.png";
import oneandhalf from "../../assets/yelp_stars/oneandhalf.png";
import two from "../../assets/yelp_stars/two.png";
import twoandhalf from "../../assets/yelp_stars/twoandhalf.png";
import three from "../../assets/yelp_stars/three.png";
import threeandhalf from "../../assets/yelp_stars/threeandhalf.png";
import four from "../../assets/yelp_stars/four.png";
import fourandhalf from "../../assets/yelp_stars/fourandhalf.png";
import five from "../../assets/yelp_stars/five.png";

interface Props {
  reviewRating: number;
  reviewCount: number;
}

const ReviewStarsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 10px;
  align-items: center;
`;

export const ReviewStars: React.FunctionComponent<Props> = ({
  reviewRating,
  reviewCount,
}) => {
  const findReviewStarImgUrl = (rating: number): string => {
    let imgUrl = zero;

    if (rating === 1) {
      imgUrl = one;
    } else if (rating === 1.5) {
      imgUrl = oneandhalf;
    } else if (rating === 2) {
      imgUrl = two;
    } else if (rating === 2.5) {
      imgUrl = twoandhalf;
    } else if (rating === 3) {
      imgUrl = three;
    } else if (rating === 3.5) {
      imgUrl = threeandhalf;
    } else if (rating === 4) {
      imgUrl = four;
    } else if (rating === 4.5) {
      imgUrl = fourandhalf;
    } else if (rating === 5) {
      imgUrl = five;
    }

    return imgUrl;
  };

  return (
    <ReviewStarsContainer>
      <img
        src={findReviewStarImgUrl(reviewRating)}
        alt={`${reviewRating} stars`}
      />
      <CaptionText>{reviewCount}</CaptionText>
    </ReviewStarsContainer>
  );
};
