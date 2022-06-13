import React from "react";
import ForYouLogo from "./logo";

function Drawer() {
  return (
    <div
      className="bg-light-gray flex flex-column items-center h-100 p-fixed pv4"
      style={{ width: 200 }}
    >
      <ForYouLogo />
    </div>
  );
}

export default Drawer;
