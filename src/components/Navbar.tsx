import React, { useState, useRef } from "react";
import styled from "styled-components";
import { HeaderTextSmall } from "./themes/TypographyStyles";
import { SearchBar } from "./SearchBar";
import search from "../assets/search.svg";
import useOnclickOutside from "react-cool-onclickoutside";

const NavbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 20px;
  align-items: center;
  padding: 20px 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 10px 20px #3e48680d;
  z-index: 5000;

  .search-icon {
    grid-column: 2 / 3;
    justify-self: end;
    width: 30px;
    height: 30px;

    &:hover {
      cursor: pointer;
    }

    @media (min-width: 800px) {
      display: none;
    }
  }

  .searchbar-mobile {
    display: block;
    width: 100%;
    height: 100%;
    grid-row: 2 / 3;
    grid-column: 1 / -1;
    padding-top: 20px;

    .form-container {
      display: grid;
    }

    @media (min-width: 800px) {
      display: none;
    }
  }

  .form-container {
    display: none;

    @media (min-width: 800px) {
      display: grid;
      grid-column: 2 / 3;
    }
  }
`;

export const Navbar: React.FunctionComponent = () => {
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  const mobileSearchbarRef = useRef<HTMLDivElement>(null);

  useOnclickOutside(mobileSearchbarRef, () => {
    setOpenMobileSearch(false);
  });

  return (
    <NavbarContainer>
      <HeaderTextSmall>Bad Doctor</HeaderTextSmall>
      <SearchBar />
      <img
        src={search}
        alt="Search."
        className="search-icon ignore-onclickoutside"
        onClick={() => setOpenMobileSearch((s) => !s)}
      />
      {openMobileSearch && (
        <div className="searchbar-mobile" ref={mobileSearchbarRef}>
          <SearchBar />
        </div>
      )}
    </NavbarContainer>
  );
};
