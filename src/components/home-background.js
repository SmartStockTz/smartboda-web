import React from "react";
import Lottie from "react-lottie";
import animationData from "../raw/mt.json";

function HomeBackground() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      <Lottie
        speed={1.5}
        options={defaultOptions}
        height={"100%"}
        width={"100%"}
      />
    </div>
  );
}

export default HomeBackground;
