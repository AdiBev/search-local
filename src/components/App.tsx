import React, { useState } from "react";
import { BaseStyles } from "./BaseStyles";
import { Navbar } from "./Navbar";
import { BusinessList } from "./business-list/BusinessList";
import styled from "styled-components";
import mapOpen from "../assets/map-open.svg";
import mapClose from "../assets/map-close.svg";
import { MapContainer } from "./map/MapContainer";
import { searchDataState } from "../state/app.state";
import { useRecoilValue } from "recoil";

interface AppContainerProps {
  displayMap: boolean;
}

const AppContainer = styled.div<AppContainerProps>`
  width: 100%;
  height: 100%;

  .map-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 7rem;
    right: 2rem;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 1150px) {
      display: none;
    }
  }

  .map-app-container {
    .map-wrapper {
      display: ${(props) => (props.displayMap ? `block` : "none")};
      width: 100vw;
      height: 80vh;
    }
  }
`;

function App() {
  const [openMap, setOpenMap] = useState(false);

  const data = useRecoilValue(searchDataState);

  const mapImgSrc = openMap ? mapClose : mapOpen;

  return (
    <AppContainer displayMap={openMap}>
      <BaseStyles />
      <Navbar />
      {data && (
        <img
          src={mapImgSrc}
          alt="map"
          className="map-icon"
          onClick={() => setOpenMap((s) => !s)}
        />
      )}
      {openMap ? (
        <div className="map-app-container">
          <MapContainer />
        </div>
      ) : (
        <BusinessList />
      )}
    </AppContainer>
  );
}

export default App;
