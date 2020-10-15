import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import axios from "axios";

import useCoin from "../hooks/useCoin";
import useCryptoCoin from "../hooks/useCryptoCoin";
import Error from "./Error";

const ContainerButton = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const Form = ({ setCoin, setCryptoCoin }) => {
  //state list cryptocoins
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: "USD", name: "USA Dollar" },
    { code: "EUR", name: "EURO" },
    { code: "COP", name: "Colombian Peso" },
  ];
  //using our state useCoin
  const [coin, SelectCoin] = useCoin("Select your currency", "", COINS);

  const [cryptoCoin, SelectCryptoCoin] = useCryptoCoin(
    "Select your Crytpto Coin",
    "",
    list
  );

  //Excute call to the API
  useEffect(() => {
    const callAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

      const result = await axios.get(url);
      setList(result.data.Data);
    };
    callAPI();
  }, []);

  //check when the user submit
  const calcCoin = (e) => {
    e.preventDefault();

    //validate if the fields are full
    if (coin === "" || cryptoCoin === "") {
      setError(true);
      return;
    }

    // pass the validation to the main component
    setError(false);

    setCoin(coin);
    setCryptoCoin(cryptoCoin);
  };

  return (
    <form onSubmit={calcCoin}>
      {error ? <Error message="All the info is required" /> : null}

      <SelectCoin />
      <SelectCryptoCoin />
      <ContainerButton type="submit" value="Calc" />
    </form>
  );
};

Form.propTypes = {
  setCoin: PropTypes.func.isRequired,
  setCryptoCoin: PropTypes.func.isRequired,
};

export default Form;
