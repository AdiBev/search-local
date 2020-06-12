import React from "react";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import marker from "../../assets/map-marker.png";
import { Coordinates } from "../../generated/graphql";
import { HeaderTextSmall, CaptionText } from "../themes/TypographyStyles";

const iconMarker = L.icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  iconSize: new L.Point(60, 75),
});

interface Props {
  coordinates: Coordinates;
  businessName: string;
  address: string;
  id: string;
}

export const MapMarker: React.FunctionComponent<Props> = ({
  coordinates,
  businessName,
  address,
  id,
}) => {
  const position = { lat: coordinates.latitude!, lng: coordinates.longitude! };
  return (
    <Marker position={position} icon={iconMarker}>
      <Popup>
        <HeaderTextSmall>{businessName}</HeaderTextSmall>
        <br />
        <CaptionText>{address}</CaptionText>
      </Popup>
    </Marker>
  );
};
