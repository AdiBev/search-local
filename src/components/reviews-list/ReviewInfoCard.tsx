import React from "react";
import styled from "styled-components";
import user from "../../assets/user.svg";
import { BodySubText, BodyText, LinkText } from "../themes/TypographyStyles";
import { ReviewStars } from "./ReviewStars";
import { colorPrimaryDark } from "../themes/BaseStyles";
import { Review } from "../../generated/graphql";

const ReviewInfoCardWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 10px;

  @media (min-width: 800px) {
    grid-template-columns: 150px 1fr;
    grid-template-rows: unset;
    grid-column-gap: 20px;
    grid-row-gap: 0;
  }

  .user-info-container {
    img {
      width: 45px;
      height: 50px;
      border-radius: 50%;
    }
    .user-name {
      margin-top: 10px;
    }
  }

  .info-container {
    display: grid;
    grid-template-rows: repeat(2, max-content);
    grid-row-gap: 10px;

    a {
      display: inline-block;
    }

    img {
      height: 25px;
      align-self: start;
    }

    .read-more {
      display: inline-block;
      font-size: 16px;
      &:hover {
        cursor: pointer;
        color: ${colorPrimaryDark};
      }
    }
  }
`;

interface Props {
  review: Review;
}

export const ReviewInfoCard: React.FunctionComponent<Props> = ({ review }) => {
  const avatarUrl = review.user?.image_url ? review.user?.image_url : user;

  const inCompleteReviewDisplayed =
    review.text?.search("...") !== -1 ? true : false;

  return (
    <ReviewInfoCardWrapper>
      <div className="user-info-container">
        <img src={avatarUrl} alt="User avatar" />
        <BodySubText className="user-name">{review.user?.name!}</BodySubText>
      </div>
      <div className="info-container">
        <ReviewStars reviewRating={review.rating!} />
        <BodyText>{review.text!}</BodyText>
        {inCompleteReviewDisplayed && (
          <LinkText href={review.url!} target="_blank" rel="nopener nofollow">
            <BodyText className="read-more">Read more on yelp</BodyText>
          </LinkText>
        )}
      </div>
    </ReviewInfoCardWrapper>
  );
};
