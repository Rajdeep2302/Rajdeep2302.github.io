import React, { useState, useEffect } from "react";

const Header = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      setTime(formattedTime);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-screen bg-[#0008] h-[20px] flex justify-between items-center">
      <div className="font-Workbench flex gap-5 text-[10px] w-[40%]">
        <span>{time}</span>
        <p>VERSION: PAL UI 1</p>
      </div>
      <div className="border-[2px] border-[#555] h-[20px] bg-[#000] aspect-square rounded-full flex justify-center items-center"></div>
      <div className="font-Workbench flex justify-end gap-2 text-[10px] w-[40%]">
        <i className="fa-regular fa-clock"></i>
        <i className="fa-solid fa-wifi"></i>
        <i className="fa-solid fa-signal"></i>
        <i className="fa-solid fa-signal"></i>
        <i className="fa-solid fa-battery-full"></i>
      </div>
    </div>
  );
};

export default Header;
