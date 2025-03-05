import React from "react";
import { assets } from "../../assets/assets";
import Header from "../Attributes/Header";
import LockClock from "../Attributes/LockClock";
import LockDown from "../Attributes/LockDown";

const TabLockScreen = () => {
  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen absolute">
        {/* Header */}
        <Header />
        <LockClock/>
        <LockDown/>
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
