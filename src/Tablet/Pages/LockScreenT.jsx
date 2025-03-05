import React from "react";
import { assets } from "../../assets/assets";

const LockScreenT = () => {

  return (
    <div>
      <div className="h-screen  w-screen flex justify-center items-center">
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
        <div className="w-screen flex flex-col justify-start items-start h-[200px]">
          {/* <span className="font-Audiowide text-[100px] px-10 -my-5">
            10:00 AM
          </span>
          <span className="font-Audiowide text-[50px] px-10 -my-5">
            Wednesday, Feb 8
          </span> */}
        </div>
        <div className="w-screen flex flex-col justify-center items-center">
          <div>
          <img
            src={assets.image1}
            className="h-[400px] border-[10px] object-cover rounded-full aspect-square "
            alt=""
          />
          </div>
          <p className="font-Audiowide text-[25px] py-5">
            Click To Unlock The Portfolio
          </p>
        </div>
        <div className="w-screen flex flex-col justify-start items-start h-[200px]">
          <span className="font-Audiowide text-[100px] px-10 -my-5">
            10:00 AM
          </span>
          <span className="font-Audiowide text-[50px] px-10 -my-5">
            Wednesday, Feb 8
          </span>
        </div>
        <div className="w-screen absolute bottom-0 flex justify-end gap-[50px] pr-[20px] items-center text-[20px] h-[50px]">
          <i class="fa-solid fa-wifi"></i>
          <i class="fas fa-battery-full"></i>
        </div>
      </div>
    </div>
  );
};

export default LockScreenT;
