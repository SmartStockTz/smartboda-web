import React from "react";
import ForYouLogo from "./logo";

function HomeHeader() {
  return (
    <div className="w-100 flex items-center pv2">
      <div class="w-50 pa1">
        <p className="f1 pa0 ma0">4YOU</p>
        <p className="pa0 ma0">Delivery</p>
      </div>
      <div className="w-50 pa1 flex items-end flex-column">
        <ForYouLogo className="" />
      </div>
    </div>
  );
}

export default HomeHeader;
