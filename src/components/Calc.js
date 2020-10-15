import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";

const ContainerResult = styled.div`
  color: #fff;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-top: 1rem;
  width: 100%;
  display: block;
  padding: 0.5rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
`;

const ContainerPrice = styled.p`
  font-size: 2.4rem;
`;

const Calc = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <ContainerResult>
      <ContainerPrice>
        The price is: <span>{result.PRICE}</span>
      </ContainerPrice>
      <p>
        Higher day price: <span>{result.HIGHDAY}</span>
      </p>
      <p>
        Lower day price: <span>{result.LOWDAY}</span>
      </p>
      <p>
        Variation las 24 hours: <span>{result.CHANGEPCT24HOUR}</span>
      </p>
      <p>
        Last update: <span>{result.LASTUPDATE}</span>
      </p>
    </ContainerResult>
  );
};

Calc.propTypes = {
  result: PropTypes.object.isRequired,
};

export default Calc;
