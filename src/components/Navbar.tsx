import React from "react";
import styled from "styled-components";
import { HeaderTextSmall } from "./themes/TypographyStyles";
import { SearchBar } from "./SearchBar";

const NavbarContainer = styled.div`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3e48680d;
  align-items: center;
  padding: 2rem;
  h2 {
    grid-column: 1 / 2;
  }

  form {
    grid-row: 2 / 3;
    justify-self: start;

    @media (min-width: 900px) {
      grid-row: 1 / 2;
      grid-column: 2 / 4;
      justify-self: end;
    }
  }

  @media (min-width: 900px) {
    height: 90px;
    padding: 0 2rem;
  }
`;

export const Navbar: React.FunctionComponent = () => {
  return (
    <NavbarContainer>
      <HeaderTextSmall>Bad Doctor</HeaderTextSmall>
      <SearchBar />
    </NavbarContainer>
  );
};
