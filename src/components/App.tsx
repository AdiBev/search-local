import React, { useState } from "react";
import { BaseStyles } from "./BaseStyles";
import { Navbar } from "./Navbar";
import { BusinessList } from "./business-list/BusinessList";
import styled from "styled-components";
import mapOpen from "../assets/map-open.svg";
import mapClose from "../assets/map-close.svg";
import { MapContainer } from "./map/MapContainer";
import { searchDataState, apiStatusState } from "../state/app.state";
import { useRecoilValue } from "recoil";
import { Home } from "./Home";

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
    top: 100px;
    right: 20px;
    z-index: 2000;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 1150px) {
      display: none;
    }
  }

  .map-app-container {
    padding-top: 70px;
    .map-wrapper {
      display: ${(props) => (props.displayMap ? `block` : "none")};
      width: 100vw;
      height: calc(100vh - 70px);
    }
  }
`;

function App() {
  const [openMap, setOpenMap] = useState(false);

  const data = useRecoilValue(searchDataState);
  const apiStatus = useRecoilValue(apiStatusState);

  const mapImgSrc = openMap ? mapClose : mapOpen;

  const dataLoaded = data ? true : false;
  const noResults = data?.business?.length === 0 ? true : false;

  return (
    <AppContainer displayMap={openMap}>
      <BaseStyles />
      <Navbar />
      {dataLoaded && !noResults && (
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
      ) : dataLoaded && !noResults ? (
        <BusinessList />
      ) : null}

      <Home
        dataLoaded={dataLoaded}
        noResults={noResults}
        apiStatus={apiStatus}
      />
    </AppContainer>
  );
}

export default App;
