import React from "react";

const ControllerBill = ({ iconDollar, bill, handleBill, error }) => {
  return (
    <>
      <div className="input--container">
        <label htmlFor="bill-amount" className="input--label">
          Bill
        </label>
        <div className="bill-input-container">
          <img src={iconDollar} className="dollar-logo" alt="logo" />
          <input
            className="input-field"
            type="number"
            name="amount"
            id="bill-amount"
            aria-label="bill-amount"
            value={bill}
            onChange={handleBill}
            placeholder="0"
            min="0"
          />
        </div>
      </div>
    </>
  );
};

export default ControllerBill;
