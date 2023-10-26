import React, { useState } from "react";
import ControllerBill from "./Controllers/ControllerBill";
import ControllerTip from "./Controllers/ControllerTip";
import ControllerPeopleCount from "./Controllers/ControllerPeopleCount";
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";

const CalculationComponent = () => {
  const [bill, setBill] = useState("");
  const [peopleCount, setPeopleCount] = useState("");
  const [error, setError] = useState("");

  const handleBill = (event) => {
    setBill(event.target.value);
    console.log(bill);
  };

  const handlePeopleCount = (event) => {
    setError("");
    setPeopleCount(event.target.value);
    console.log(peopleCount);
    if (Number(event.target.value) === 0) {
      setError(" Number of people Can't be a zero");
    }
  };

  return (
    <div className="calculation-content">
      <ControllerBill
        iconDollar={iconDollar}
        bill={bill}
        handleBill={handleBill}
      />
      <ControllerTip />
      <ControllerPeopleCount
        iconPerson={iconPerson}
        error={error}
        handlePeopleCount={handlePeopleCount}
        peopleCount={peopleCount}
      />
    </div>
  );
};

export default CalculationComponent;
