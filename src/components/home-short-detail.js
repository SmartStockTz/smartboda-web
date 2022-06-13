import React from "react";
import { ReactComponent as PlayStore } from "../raw/playstore.svg";
import { ReactComponent as AppStore } from "../raw/appstore.svg";

function HomeDetail() {
  return (
    <div className="">
      <p className="f4">( Kwa ajili yako delivali )</p>
      <p className="f5">
        Fast and reliable delivery service for your packages that will fit on a
        boda boda. Our price is affordable and current we operate in Dar - Es -
        Salaam.
      </p>
      <p className="f5">Start by download our app below.</p>
      <div className="flex items-center flex-wrap">
        <a
          className="pa1"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=tz.co.smartstock.smartboda"
        >
          <PlayStore />
        </a>
        <a
          className="pa1"
          target="_blank"
          href="https://play.google.com/store/apps/details?id=tz.co.smartstock.smartboda"
        >
          <AppStore />
        </a>
      </div>
    </div>
  );
}

export default HomeDetail;
