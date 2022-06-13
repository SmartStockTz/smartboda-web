import React from "react";

function OtpCodeInput({ value, onChange }) {
  return (
    <div className="bg-light-gray pa3 w-100 mv2 br2">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Passcode"
        className="bg-light-gray outline-0 b--none w-100"
        type="password"
      />
    </div>
  );
}

export default OtpCodeInput;
