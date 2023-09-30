import React from "react";

const BillInput = ({ handleBill, bill }) => {
  return (
    <div>
      <input onChange={handleBill} type="number" value={bill} />
    </div>
  );
};

export default BillInput;
