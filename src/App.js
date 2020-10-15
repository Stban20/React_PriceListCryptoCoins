import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import image from "./cryptomonedas.png";
import axios from "axios";
import Form from "./components/Form";
import Calc from "./components/Calc";
import Spinner from "./components/Spinner";

const ContainerMain = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
const ContainerHeading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  //useStates
  const [coin, setCoin] = useState("");
  const [cryptoCoin, setCryptoCoin] = useState("");
  const [result, setResult] = useState({});
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    const calcCryptoCoin = async () => {
      if (coin === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`;
      const result = await axios.get(url);
      setSpinner(true);

      setTimeout(() => {
        setSpinner(false);
        setResult(result.data.DISPLAY[cryptoCoin][coin]);
      }, 2000);
    };
    calcCryptoCoin();
  }, [coin, cryptoCoin]);

  const component = spinner ? <Spinner /> : <Calc result={result} />;

  return (
    <ContainerMain>
      <div>
        <Image src={image} alt="image crypto" />
      </div>
      <div>
        <ContainerHeading>
          Instant Price List Crypto Coins React App
        </ContainerHeading>
        <Form setCoin={setCoin} setCryptoCoin={setCryptoCoin} />
        {component}
      </div>
    </ContainerMain>
  );
}

export default App;
