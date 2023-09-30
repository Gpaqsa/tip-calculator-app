import React from "react";

const PeopleCountInput = ({ handlePeopleCount, peopleCount }) => {
  return (
    <div>
      <input type="number" onChange={handlePeopleCount} value={peopleCount} />
    </div>
  );
};

export default PeopleCountInput;
