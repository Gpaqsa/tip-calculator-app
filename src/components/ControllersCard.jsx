import React, { useState } from "react";
import BillInput from "./controllers/BillInput";
import TipPercentController from "./controllers/TipPercentController";
import PeopleCountInput from "./controllers/PeopleCountInput";
const ControllersCard = () => {
  const [bill, setBill] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [error, setError] = useState("");

  const handleBill = (event) => {
    setBill(event.target.value);
    console.log(event.target.value);
  };

  const handlePeopleCount = (event) => {
    setPeopleCount(event.target.value);
    console.log(event.target.value);
    setError("");
    if (Number(peopleCount) === 0) {
      setError("Number of people cannot be zero");
    }
  };

  return (
    <div className="controllersCard">
      <BillInput bill={bill} handleBill={handleBill} />
      <TipPercentController />
      <PeopleCountInput
        peopleCount={peopleCount}
        handlePeopleCount={handlePeopleCount}
      />

      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ControllersCard;
