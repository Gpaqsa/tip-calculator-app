import React from "react";
import BillInput from "./controllers/BillInput";
import TipPercentController from "./controllers/TipPercentController.jsx";
import PeopleCountInput from "./controllers/PeopleCountInput.jsx";
const ControllersCard = () => {
  return (
    <div className="controllersCard">
      <BillInput />
      <TipPercentController />
      <PeopleCountInput />
    </div>
  );
};

export default ControllersCard;
