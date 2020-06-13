import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { searchDataState } from "../../state/app.state";
import { BusinessDetailsCard } from "./BusinessDetailsCard";
import { Business } from "../../generated/graphql";
import { MapContainer } from "../map/MapContainer";

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding-top: 120px;

  @media (min-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  grid-column: 1 / -1;
  padding: 0;

  @media (min-width: 800px) {
    padding: 30px;
  }

  @media (min-width: 1150px) {
    grid-column: 1 / 2;
  }
`;

export const BusinessList: React.FunctionComponent = () => {
  const data = useRecoilValue(searchDataState);

  return (
    <ListWrapper>
      <ListContainer>
        {data &&
          data?.business?.map((businessDetails) => (
            <BusinessDetailsCard
              businessDetails={businessDetails as Business}
              key={businessDetails?.id!}
            />
          ))}
      </ListContainer>
      {data && <MapContainer />}
    </ListWrapper>
  );
};
