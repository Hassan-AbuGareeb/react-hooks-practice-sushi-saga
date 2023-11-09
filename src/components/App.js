import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";
import Form from "./Form";
const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [lowerBound, setLowerBound] = useState(0);
  const [eatenSushiCounter, setEatenSushiCounter] = useState([]);
  const [money, setMoney] = useState(100);
  async function getSushis() {
    const resp = await fetch(API);
    const data = await resp.json();
    setSushis([...data]);
  }

  useEffect(() => {
    getSushis();
  }, []);
  let tempsushi = [];
  for (let i = lowerBound, j = lowerBound + 4; i < j; i++)
    tempsushi = [...tempsushi, sushis[i]];

  return (
    <div className="app">
      <Form onAddMoney={setMoney} />
      <SushiContainer
        sushis={tempsushi}
        more={setLowerBound}
        eatSushi={setEatenSushiCounter}
        chargeMoney={setMoney}
        money={money}
      />
      <Table plates={eatenSushiCounter} moneyLeft={money} />
    </div>
  );
}

export default App;
