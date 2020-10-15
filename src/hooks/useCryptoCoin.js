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

const useCryptoCoin = (label, stateInitial, options) => {
  //State of our custom hook
  const [state, setSateCryptoCoin] = useState(stateInitial);

  const SelectCrypto = () => (
    <Fragment>
      <ContainerLabel>{label}</ContainerLabel>
      <ContainerSelect
        onChange={(e) => setSateCryptoCoin(e.target.value)}
        value={state}
      >
        <option value="">--Select your Crypto Coin--</option>
        {options.map((option) => (
          <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>
            {option.CoinInfo.FullName}
          </option>
        ))}
      </ContainerSelect>
    </Fragment>
  );

  return [state, SelectCrypto, setSateCryptoCoin];
};

export default useCryptoCoin;
