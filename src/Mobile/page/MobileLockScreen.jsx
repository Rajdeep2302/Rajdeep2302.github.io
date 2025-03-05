import React from "react";
import { assets } from "../../assets/assets";
import Header from "../Content/Header";
import LockClock from "../Content/LockClock";
import LockDown from "../Content/LockDown";

const TabLockScreen = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen absolute">
        {/* Header */}
        <Header />
        <LockClock />
        <LockDown />
      </div>
      <img
        src={assets.MobileWallpaper}
        className="object-center object-cover h-screen w-screen"
        alt=""
      />
    </div>
  );
};

export default TabLockScreen;
