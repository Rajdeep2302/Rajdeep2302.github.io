import React, { useState, useEffect } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const LockScreen = () => {
  const navigate = useNavigate();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      // Format Time (12-hour format with AM/PM)
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      // Format Date (e.g., Wednesday, Feb 8)
      const formattedDate = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });

      setTime(formattedTime);
      setDate(formattedDate);
    };

    updateTime(); // Initial update
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        navigate("/HomePage");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div onClick={() => navigate('/HomePage')}>
      <div className="h-screen w-screen flex justify-center items-center">
        <img
          src={assets.bg2}
          className="fixed rotate-45 w-[996.22px] aspect-auto -mb-[200px] -ml-[1000px]"
          alt=""
        />
        <img
          src={assets.bg1}
          className="fixed rotate-45 w-[1111px] -mt-[100px] -mr-[900px]"
          alt=""
        />
      </div>

      <div className="w-screen fixed top-0 left-0 h-screen flex flex-col z-20 justify-evenly items-center">
        <div className="w-screen flex flex-col justify-start items-start h-[200px]"></div>

        {/* Profile Image & Unlock Text */}
        <div className="w-screen flex flex-col justify-center items-center">
          <div>
            <img
              src={assets.image1}
              className="h-[400px] border-[10px] object-cover rounded-full aspect-square "
              alt=""
            />
          </div>
          <p className="font-Audiowide text-[25px] pt-5">
            Click 'Enter' To Unlock The Portfolio
          </p>
          <p className="font-Audiowide text-[25px] pb-5">
            Press 'F11' for better experience
          </p>
        </div>

        {/* Live Time & Date */}
        <div className="w-screen flex flex-col justify-start items-start h-[200px]">
          <span className="font-Audiowide text-[100px] px-10 -my-5">{time}</span>
          <span className="font-Audiowide text-[50px] px-10 -my-5">{date}</span>
        </div>

        {/* Icons */}
        <div className="w-screen absolute bottom-0 flex justify-end gap-[50px] pr-[20px] items-center text-[20px] h-[50px]">
          <i className="fa-solid fa-wifi"></i>
          <i className="fas fa-battery-full"></i>
        </div>
      </div>
    </div>
  );
};

export default LockScreen;
