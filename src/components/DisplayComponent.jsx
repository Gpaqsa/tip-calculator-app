import React, { useState } from "react";
import ResultContent from "./Controllers/ResultContent";

const DisplayComponent = () => {
  const [active, setActive] = useState(false);
  const [totalTip, setTotalTip] = useState(0);
  const [totalPerson, setTotalPerson] = useState(0);
  const handleReset = () => {
    setTotalPerson(0);
    setTotalTip(0);
    setActive(false);
  };
  return (
    <div className="displayComponent">
      <ResultContent
        totalTip={totalTip}
        active={active}
        totalPerson={totalPerson}
        handleReset={handleReset}
      />
    </div>
  );
};

export default DisplayComponent;
