import React from "react";
import ConsoleTopBar from "../components/console-topbar";
import Drawer from "../components/drawer";

function OrdersPage() {
  return (
    <div className="sans-serif flex vh-100">
      <aside>
        <Drawer />
      </aside>
      <div className="w-100">
        <ConsoleTopBar title={"Orders"} />
      </div>
    </div>
  );
}

export default OrdersPage;
