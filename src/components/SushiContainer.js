import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, more, eatSushi, chargeMoney, money }) {
  console.log(sushis);

  return (
    <div className="belt">
      {sushis[0] === undefined
        ? null
        : sushis.map((sushi) => {
            return (
              <Sushi
                key={sushi.id}
                name={sushi.name}
                image={sushi.img_url}
                price={sushi.price}
                onEatSushi={eatSushi}
                chargeMoney={chargeMoney}
                money={money}
              />
            );
          })}
      <MoreButton onMoreClick={more} />
    </div>
  );
}

export default SushiContainer;
