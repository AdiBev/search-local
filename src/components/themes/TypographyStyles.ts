import styled from "styled-components";
import { colorPrimary } from "../BaseStyles";

interface HeaderTextLgProps {
  primary?: boolean;
}

export const HeaderTextLg = styled.h1<HeaderTextLgProps>`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 20px;
  color: ${(props) => (props.primary ? colorPrimary : "white")};

  @media (min-width: 800px) {
    font-size: 48px;
    line-height: 54px;
  }
`;

export const HeaderTextSmall = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${colorPrimary};

  @media (min-width: 800px) {
    font-size: 21px;
  }
`;

export const SubHeaderText = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: ${colorPrimary};
`;

export const BodyText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 300;
  line-height: 25px;
  color: #3e4868e5;
`;

export const BodySubText = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  line-height: 17px;
  color: #3e4868e5;
`;

export const CaptionText = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
  color: #3e4868e5;
`;
