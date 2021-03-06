import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const ContainerLabel = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const ContainerSelect = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCoin = (label, stateInitial, options) => {
  //State of our custom hook
  const [state, setSate] = useState(stateInitial);

  const Select = () => (
    <Fragment>
      <ContainerLabel>{label}</ContainerLabel>
      <ContainerSelect onChange={(e) => setSate(e.target.value)} value={state}>
        <option value="">--Select your Currency--</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </ContainerSelect>
    </Fragment>
  );

  return [state, Select, setSate];
};

export default useCoin;
