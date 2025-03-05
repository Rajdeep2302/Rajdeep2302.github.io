import React from "react";

const Header = () => {
  return (
    <div className="w-screen h-[20px] flex justify-between items-center">
      <div className="font-Kaushan flex gap-5 text-[15px] w-[40%]">
        <span>8:14</span>
        <p>VERSION: PAL UI 1</p>
      </div>
      <div className="border-[2px] border-[#555] h-[20px] bg-[#0001] aspect-square rounded-full flex justify-center items-center"></div>
      <div className="font-Kaushan flex justify-end gap-2 text-[15px] w-[40%]">
        <i class="fa-regular fa-clock"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-battery-full"></i>
      </div>
    </div>
  );
};

export default Header;
