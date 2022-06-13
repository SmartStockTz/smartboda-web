import React, { useState } from "react";
import LoginButton from "./login-button";
import MobileInput from "./mobile-input";
import OtpCodeInput from "./opt-code-input";

function LoginForm() {
  const [mobile, setMobile] = useState("");
  const [otp, setOpt] = useState("");
  return (
    <div className="mw-9 w-100">
      <p>Enter your credentials</p>
      <MobileInput
        value={mobile}
        onChange={(m) => {
          setMobile(m);
        }}
      />
      <OtpCodeInput
        value={otp}
        onChange={(o) => {
          setOpt(o);
        }}
      />
      <LoginButton text={"Next"} />
    </div>
  );
}

export default LoginForm;
