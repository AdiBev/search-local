import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";
import { useRecoilState } from "recoil";
import { searchDataState } from "../state/app.state";

const FormContainer = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr) max-content;
  grid-gap: 15px;
  max-width: 100%;
  height: auto;
  align-items: center;

  button {
    justify-self: start;
    width: max-content;
  }

  @media (min-width: 800px) {
    grid-template-rows: unset;
    grid-template-columns: repeat(2, 1fr) max-content;
    grid-row-gap: 0;
    grid-column-gap: 20px;
  }
`;

export const SearchBar: React.FunctionComponent = () => {
  const [searchData, setSearchData] = useRecoilState(searchDataState);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const fetchBusinessDetails = async () => {
    const offset = 20;

    const dataUrl = `https://garnet-gilded-phosphorus.glitch.me/graphql?location=${location}&term=${searchTerm}&limit=2&offset=${offset}`;

    if (offset) {
      const res = await fetch(dataUrl);
      const data = await res.json();
      const json = await data;
      setSearchData(json?.search);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchBusinessDetails();
  };

  ///Clear input fields on successful fetch req
  useEffect(() => {
    if (searchData) {
      setSearchTerm("");
      setLocation("");
    }
  }, [searchData]);

  return (
    <FormContainer onSubmit={(e) => handleSubmit(e)} className="form-container">
      <Input
        required
        placeholder="Restauarants, Shopping etc"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Input
        required
        type="text"
        placeholder="London, England"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button
        whileHover={{ scale: 1.1, transition: { duration: 1 } }}
        whileTap={{ scale: 0.9 }}
      >
        Search
      </Button>
    </FormContainer>
  );
};
