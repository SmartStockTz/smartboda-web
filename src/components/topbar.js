import React from "react";
import { Link } from "react-router-dom";

function TopBar() {
  return (
    <div className="pa2 flex items-end justify-end sans-serif ph4">
      <Link className="blue no-underline underline-hover" to="/login">
        Console
      </Link>
    </div>
  );
}

export default TopBar;
