import React from "react";

function LoginButton({ text, onClick }) {
  return (
    <a
      className="br2 bg-black mv4 flex items-center justify-center no-underline dim link"
      href="#0"
      onClick={onClick}
    >
      <p className="f5 white">{text}</p>
    </a>
  );
}

export default LoginButton;
