import React from "react";


const ControllerTip = ({ tip, handleTipBtn, active }) => {
  const amounts = [
    { value: 5 },
    { value: 10 },
    { value: 15 },
    { value: 25 },
    { value: 50 },
  ];
  return (
    <>
      <div className="tip-container">
        <label className="input-label">Select Tip %</label>
        <div>
          {amounts.map((btn, index) => {
            return (
              <button
                className=" { tip == btn.value ? selectedStyle : normalStyle} tipButton"
                value={btn.value}
                key={index}
                onClick={handleTipBtn}
              >
                {btn.value} %
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ControllerTip;
