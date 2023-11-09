import React from "react";

function MoreButton({ onMoreClick }) {
  function handleMoreClick() {
    onMoreClick((prev) => {
      if (prev === 96) return 0;
      else return prev + 4;
    });
  }
  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
