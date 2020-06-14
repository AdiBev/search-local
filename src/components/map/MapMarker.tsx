import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../../assets/map-marker.png";
import { Coordinates } from "../../generated/graphql";
import {
  HeaderTextSmall,
  CaptionText,
  LinkText,
} from "../themes/TypographyStyles";
import styled from "styled-components";
import { ReviewStars } from "../reviews-list/ReviewStars";

const iconMarker = L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconSize: new L.Point(60, 75),
});

interface Props {
  coordinates: Coordinates;
  business: { name: string; url: string };
  address: string;
  review: { rating: number; total: number };
}

const PopupContainer = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  grid-row-gap: 10px;

  img {
    width: 100px;
    height: 20px;
  }
`;

export const MapMarker: React.FunctionComponent<Props> = ({
  coordinates,
  business,
  address,
  review,
}) => {
  const position = { lat: coordinates.latitude!, lng: coordinates.longitude! };
  return (
    <Marker position={position} icon={iconMarker}>
      <Popup>
        <PopupContainer>
          <HeaderTextSmall>
            <LinkText
              href={business.url}
              target="_blank"
              rel="nofollow noopener"
            >
              {business.name}
            </LinkText>
          </HeaderTextSmall>
          <ReviewStars
            reviewRating={review.rating}
            reviewCount={review.total}
          />
          <CaptionText>{address}</CaptionText>
        </PopupContainer>
      </Popup>
    </Marker>
  );
};
