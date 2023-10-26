import React, { useState } from "react";
import ControllerBill from "./Controllers/ControllerBill";
import ControllerTip from "./Controllers/ControllerTip";
import ControllerPeopleCount from "./Controllers/ControllerPeopleCount";
import iconDollar from "../assets/icon-dollar.svg";
import iconPerson from "../assets/icon-person.svg";

const CalculationComponent = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [error, setError] = useState("");
  const [active, setActive] = useState(false);
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);

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

  const handleTipBtn = (event) => {
    setTip(Number(event.target.value));
    setActive(true);
  };
  const handleReset = () => {
    setBill(0);
    setTip(0);
    setPeopleCount(0);
    setTotalPerson(0);
    setTotalTip(0);
    setActive(false);
  };
  return (
    <div className="calculation-content">
      <ControllerBill
        iconDollar={iconDollar}
        bill={bill}
        handleBill={handleBill}
      />
      <ControllerTip handleTipBtn={handleTipBtn} tip={tip} />
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
