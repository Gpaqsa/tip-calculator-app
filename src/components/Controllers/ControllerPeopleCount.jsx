import React from "react";

const ControllerPeopleCount = ({
  iconPerson,
  handlePeopleCount,
  peopleCount,
  error,
}) => {
  return (
    <>
      <div className="input--container">
        <div className="label--container">
          <label htmlFor="people-amount" className="input--label">
            Number of People
          </label>
        </div>
        <div className="bill-input-container">
          <img src={iconPerson} className="person-logo" alt="logo" />
          <input
            className="input-field"
            type="number"
            name="amount"
            id="people-amount"
            aria-label="people-amount"
            value={peopleCount}
            placeholder="0"
            onChange={handlePeopleCount}
            min="0"
          />
        </div>
        <label htmlFor="people-amount" className="input--label--error">
          {error}
        </label>
      </div>
    </>
  );
};

export default ControllerPeopleCount;
