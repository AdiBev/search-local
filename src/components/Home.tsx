import React from "react";
import searchLocal from "../assets/search-local.png";
import empty from "../assets/no-results.png";
import loadingApi from "../assets/loading-api.png";
import errorApi from "../assets/error-api.png";

import styled from "styled-components";
import { ApiStatus } from "../state/app.state";
import { HeaderTextLg } from "./themes/TypographyStyles";

interface Props {
  dataLoaded: boolean;
  noResults: boolean;
  apiStatus: ApiStatus;
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-width: 300px;
    height: 300px;
    margin-top: 150px;

    @media (min-width: 800px) {
      max-width: 800px;
      height: 500px;
    }
  }

  h1 {
    font-size: 40px;
    color: #b7b7b7;
  }
`;

export const Home: React.FunctionComponent<Props> = ({
  dataLoaded,
  noResults,
  apiStatus,
}) => {
  const { loading, error } = apiStatus;

  return (
    <HomeContainer>
      {!dataLoaded && !error && !loading && (
        <img src={searchLocal} alt="Man with dog searching." />
      )}

      {loading && (
        <>
          <img src={loadingApi} alt="API loading." />
          <HeaderTextLg primary>Loading...</HeaderTextLg>
        </>
      )}

      {noResults && !loading && <img src={empty} alt="No results." />}

      {error && !loading && <img src={errorApi} alt="Error." />}
    </HomeContainer>
  );
};
