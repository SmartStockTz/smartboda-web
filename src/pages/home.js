import React from "react";
import HomeBackground from "../components/home-background";
import HomeDetail from "../components/home-short-detail";
import HomeHeader from "../components/home-title-and-logo";
import TopBar from "../components/topbar";
import "./home.style.css";

function HomePage() {
  return (
    <div>
      <TopBar />
      <div class="center home-page-container flex items-center justify-center sans-serif ph4">
        <div class="ph2-ns">
          <div class="fl w-100 w-50-ns pa2">
            <div class="pv4">
              <HomeBackground />
            </div>
          </div>
          <div class="fl w-100 w-50-ns pa2">
            <div class="pv4">
              <HomeHeader />
              <HomeDetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
