import React from "react";
import { ReactComponent as Dehaze } from "../raw/dehaze.svg";

function ConsoleTopBar({ title }) {
  return (
    <div className="flex pa2 ">
      <a className="no-underline ph3" href="#0">
        <Dehaze />
      </a>
      <span className="f4">{title}</span>
      {/* <div className="bg-gray br50 w-24 h-24" /> */}
    </div>
  );
}

export default ConsoleTopBar;
