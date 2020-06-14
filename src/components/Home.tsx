import React from "react";
import searchLocal from "../assets/search-local.png";
import empty from "../assets/no-results.png";
import loadingApi from "../assets/loading-api.png";
import errorApi from "../assets/error-api.png";

import styled from "styled-components";
import { ApiStatus } from "../state/app.state";

interface Props {
  dataLoaded: boolean;
  noResults: boolean;
  apiStatus: ApiStatus;
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    max-width: 300px;
    height: 300px;
    margin-top: 150px;

    @media (min-width: 800px) {
      max-width: 800px;
      height: 500px;
    }
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
      {!dataLoaded && !error && (
        <img src={searchLocal} alt="Man with dog searching." />
      )}

      {loading && <img src={loadingApi} alt="API loading." />}

      {noResults && <img src={empty} alt="No results." />}

      {error && <img src={errorApi} alt="No results." />}
    </HomeContainer>
  );
};
