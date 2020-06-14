import React, { useEffect, useState } from "react";
import { Map, TileLayer } from "react-leaflet";
import styled from "styled-components";
import "leaflet/dist/leaflet.css";
import { useRecoilValue } from "recoil";
import { searchDataState } from "../../state/app.state";
import { MapMarker } from "./MapMarker";

const MapWrapper = styled.div`
  display: none;

  @media (min-width: 1150px) {
    display: block;
    width: 50%;
    height: 100%;
    position: fixed;
    right: 0;
    top: 90px;
  }
`;

export const MapContainer = () => {
  const data = useRecoilValue(searchDataState);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    if (data) {
      data?.business?.map((business) =>
        setCoordinates({
          lat: business?.coordinates?.latitude!,
          lng: business?.coordinates?.longitude!,
        })
      );
    }
  }, [data]);

  return (
    <MapWrapper className="map-wrapper">
      <Map
        center={coordinates}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {data &&
          data?.business?.map((business) => (
            <MapMarker
              coordinates={business?.coordinates!}
              business={{ name: business?.name!, url: business?.url! }}
              address={business?.location?.address1!}
              review={{
                rating: business?.rating!,
                total: business?.review_count!,
              }}
              key={business?.id!}
            />
          ))}
      </Map>
    </MapWrapper>
  );
};
