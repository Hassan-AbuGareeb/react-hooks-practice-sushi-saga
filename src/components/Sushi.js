import React, { useState } from "react";

function Sushi({ name, image, price, onEatSushi, chargeMoney, money }) {
  const [isEaten, setIsEaten] = useState(false);
  function handleSushiClick() {
    // console.log(money, price);
    if (money > price) {
      onEatSushi((prev) => [...prev, 1]);
      setIsEaten((prev) => !prev);
      chargeMoney((prev) => prev - price);
    }
  }
  return (
    <div className="sushi">
      <div className="plate" onClick={!isEaten ? handleSushiClick : null}>
        {isEaten ? null : <img src={image} alt={name} width="100%" />}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
