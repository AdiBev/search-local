import React, { Ref } from "react";
import styled from "styled-components";
import { ReviewInfoCard } from "./ReviewInfoCard";
import { HeaderTextLg, LinkText } from "../themes/TypographyStyles";
import { Review, Maybe } from "../../generated/graphql";
import { Button } from "../shared/Button";
import { motion } from "framer-motion";

const BackgroundOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  opacity: 0.5;
  z-index: 900;
`;

const MainWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ReviewListWrapper = styled(motion.div)`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 30px;
  width: 90%;
  height: 300px;
  background: white;
  padding: 30px 10px;
  border-radius: 6px;
  z-index: 1000;
  overflow-y: scroll;

  button {
    margin-bottom: 10px;
  }

  .want-more {
    color: white;
    font-size: 16px;
    font-weight: 700;
  }

  @media (min-width: 800px) {
    max-width: 500px;
    padding: 30px;
    width: 100%;
    height: auto;
    padding: 30px;
    border-radius: 6px;
    overflow: unset;
  }
`;

interface Props {
  reviewList: Maybe<Review>[];
  name: string;
  reviewsUrl: string;
}

export const ReviewList = React.forwardRef(
  ({ name, reviewList, reviewsUrl }: Props, ref: Ref<HTMLDivElement>) => {
    return (
      <>
        <BackgroundOverlay />
        <MainWrapper>
          <ReviewListWrapper
            ref={ref}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <HeaderTextLg primary>{name}</HeaderTextLg>

            {reviewList.map((review, i) => (
              <ReviewInfoCard review={review as Review} key={i} />
            ))}

            <Button
              whileHover={{ scale: 1.1, transition: { duration: 1 } }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkText
                href={reviewsUrl}
                target="_blank"
                rel="noopener nofollow"
                className="want-more"
              >
                Want more ?
              </LinkText>
            </Button>
          </ReviewListWrapper>
        </MainWrapper>
      </>
    );
  }
);
