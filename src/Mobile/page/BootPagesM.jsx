import React from "react";

const BootPagesM = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div
        className="h-[458px] aspect-square rounded-full border-x-0 border-4 border-[#00ff00] flex justify-center items-center animate-spin"
        style={{ animationDuration: "5s" }}
      >
        <div
          className="h-[426px] aspect-square rounded-full border-x-0 border-4 border-[#00ffff] flex justify-center items-center animate-spin"
          style={{ animationDuration: "7.5s" }}
        >
          <div
            className="h-[394px] aspect-square rounded-full border-x-0 border-4 border-[#0000ff] animate-spin"
            style={{ animationDuration: "10s" }}
          ></div>
        </div>
      </div>
      <div className="absolute">
        <p className="font-rock3d text-[60px] text-[#FFA600]">Portfolio</p>
        <div className="flex justify-end items-end gap-2">
          <p className="font-Audiowide text-[15px] text-[#ffffff]">version:</p>
          <p className="font-Orbitron text-[20px] text-[#ffffff]">Pal UI 1</p>
        </div>
      </div>
    </div>
  );
};

export default BootPagesM;
