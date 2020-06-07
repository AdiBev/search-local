import React from "react";
import styled from "styled-components";
import { Input } from "./shared/Input";
import { Button } from "./shared/Button";

const FormContainer = styled.form`
  display: grid;
  grid-template-rows: repeat(2, 1fr) max-content;
  grid-gap: 15px;
  max-width: 100%;
  height: auto;
  align-items: center;

  input {
    max-width: 300px;
    max-width: 100%;
    width: 250px;

    @media (min-width: 500px) {
      max-width: 500px;
    }

    @media (min-width: 1400px) {
      width: 600px;
    }
  }

  button {
    justify-self: start;
    width: max-content;

    @media (min-width: 600px) {
      grid-row: 2 / 3;
    }

    @media (min-width: 800px) {
      grid-row: unset;
      justify-self: unset;
    }
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr) max-content;
  }

  @media (min-width: 800px) {
    grid-template-rows: unset;
    grid-row-gap: 0;
    grid-column-gap: 10px;
  }
`;

export const SearchBar: React.FunctionComponent = () => {
  return (
    <FormContainer>
      <Input required placeholder="Restauarants, Shopping etc" />
      <Input required placeholder="London, England" />
      <Button
        whileHover={{ scale: 1.1, transition: { duration: 1 } }}
        whileTap={{ scale: 0.9 }}
      >
        Search
      </Button>
    </FormContainer>
  );
};
