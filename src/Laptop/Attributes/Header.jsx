import React, { useState, useEffect } from "react";

const Header = () => {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { month: "short", day: "numeric" };
      const formattedDate = now.toLocaleDateString("en-US", options);
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });

      setDateTime(`${formattedDate}, ${formattedTime}`);
    };

    updateDateTime(); // Initial call
    const interval = setInterval(updateDateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="w-screen h-[55px] bg-[#0004] fixed flex items-center justify-between top-0 px-[5px]">
      <div className="font-Chalk text-[25px] flex justify-center items-center h-[40px] w-[200px] bg-[#0007] rounded-full">
        ACTIVITIES
      </div>
      <div className="font-Chalk text-[25px] flex justify-center gap-2 items-center h-[40px] w-[200px] bg-[#0007] rounded-full">
        <span>{dateTime}</span>
      </div>
      <div className="font-Chalk text-[25px] flex justify-center items-center h-[40px] w-fit px-3 gap-4 bg-[#0007] rounded-full">
        <i className="fa-solid fa-wifi"></i>
        <i className="fa-solid fa-location-dot"></i>
        <i className="fa-solid fa-network-wired"></i>
        <i className="fa-solid fa-battery-full"></i>
      </div>
    </div>
  );
};

export default Header;
