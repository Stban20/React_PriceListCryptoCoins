import React from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";

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

const Form = () => {
  //using our state useCoin
  const [coin, SelectCoin, setState] = useCoin();

  return (
    <form>
      <SelectCoin />
      <ContainerButton type="submit" value="Calc" />
    </form>
  );
};

export default Form;
