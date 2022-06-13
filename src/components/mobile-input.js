import React from "react";

function MobileInput({ value, onChange }) {
  return (
    <div className="bg-light-gray pa1 w-100 flex br2 mv2">
      <p className="ph1">+255</p>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Mobile"
        className="bg-light-gray outline-0 b--none w-100"
        type="number"
      />
    </div>
  );
}

export default MobileInput;
