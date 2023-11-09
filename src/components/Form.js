import React, { useState } from "react";

const Form = ({ onAddMoney }) => {
  const [newFunds, setNewFunds] = useState(0);
  function handleAddMoney(event) {
    setNewFunds(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    onAddMoney((prev) => prev + parseInt(newFunds));
    setNewFunds(0);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>enter the amount of money:</label>
        <input
          type="number"
          min={0}
          onChange={handleAddMoney}
          value={newFunds}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
