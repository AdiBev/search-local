import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  inputBorder,
  colorPrimary,
  colorPrimaryDark,
} from "../themes/BaseStyles";
import {
  BodySubText,
  HeaderTextSmall,
  CaptionText,
  BodyText,
  LinkText,
} from "../themes/TypographyStyles";
import { Business } from "../../generated/graphql";
import { ReviewStars } from "../reviews-list/ReviewStars";
import businessImg from "../../assets/business.svg";
import { ReviewList } from "../reviews-list/ReviewList";
import useOnclickOutside from "react-cool-onclickoutside";

interface Props {
  businessDetails: Business;
}

const DetailsCardContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 20px;
  background-color: white;
  max-width: 100%;
  height: auto;
  margin: 20px;
  border-bottom: 1px solid ${colorPrimary};

  .business-img {
    width: 200px;
    height: 150px;
    border-radius: 6px;
    justify-self: center;

    @media (min-width: 800px) {
      justify-self: unset;
    }
  }

  .contact-details {
    display: none;
  }

  @media (min-width: 800px) {
    grid-template-rows: unset;
    grid-template-columns: max-content 1fr max-content;
    grid-row-gap: 0;
    grid-column-gap: 20px;
    border-radius: 6px;
    border: 1px solid ${inputBorder};
    margin: 0;
    padding: 20px;

    .contact-details {
      display: grid;
    }
  }
`;

const DetailsCardContent = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 5px;

  h2 {
    height: max-content;
  }

  .review {
    margin-top: 20px;
  }

  .read-more {
    align-self: end;
    padding: 10px 0;

    &:hover {
      cursor: pointer;
      color: ${colorPrimaryDark};
    }
  }

  img {
    width: 108px;
    height: 20px;
  }
`;

export const BusinessDetailsCard: React.FunctionComponent<Props> = ({
  businessDetails,
}) => {
  const [openReviews, setOpenReviews] = useState(false);

  const location = businessDetails.location;
  const reviewText = businessDetails?.reviews?.[0]?.text;
  const imgUrl = businessDetails.photos?.[0]
    ? businessDetails.photos?.[0]
    : businessImg;

  const reviewModal = useRef<HTMLDivElement>(null);

  //handle clicks outside modal
  useOnclickOutside(reviewModal, () => {
    setOpenReviews(false);
  });

  return (
    <DetailsCardContainer>
      <img src={imgUrl} alt={businessDetails?.name!} className="business-img" />
      <DetailsCardContent>
        <HeaderTextSmall>
          <LinkText
            href={businessDetails.url!}
            target="_blank"
            rel="noopener nofollow"
          >
            {businessDetails?.name}
          </LinkText>
        </HeaderTextSmall>
        <ReviewStars
          reviewRating={businessDetails?.rating!}
          reviewCount={businessDetails?.review_count!}
        />
        <BodySubText className="review">{reviewText}</BodySubText>
        <BodyText
          className="read-more"
          onClick={() => setOpenReviews((s) => !s)}
        >
          Read more reviews
        </BodyText>
      </DetailsCardContent>
      <DetailsCardContent className="contact-details">
        <CaptionText>{businessDetails.phone}</CaptionText>
        <CaptionText>{location?.address1}</CaptionText>
        <CaptionText>
          {location?.city} {location?.postal_code}
        </CaptionText>
        <CaptionText>{location?.country}</CaptionText>
      </DetailsCardContent>
      {openReviews && (
        <ReviewList
          reviewList={businessDetails.reviews!}
          name={businessDetails.name!}
          ref={reviewModal}
          reviewsUrl={businessDetails.url!}
        />
      )}
    </DetailsCardContainer>
  );
};
