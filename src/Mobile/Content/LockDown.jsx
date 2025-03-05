import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const LockDown = () => {
  const navigate = useNavigate();
  const [startY, setStartY] = useState(null);
  const [swipedUp, setSwipedUp] = useState(false);

  // Store touch start position
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  // Detect swipe up & trigger animation
  const handleTouchEnd = (e) => {
    const endY = e.changedTouches[0].clientY;
    if (startY - endY > 50) {
      setSwipedUp(true); // Start animation

      // Wait for animation to finish, then navigate
      setTimeout(() => {
        navigate("/MobileHome");
      }, 500);
    }
  };

  return (
    <div className="absolute bottom-0 flex justify-between w-screen h-[80px] items-center overflow-hidden">
      <div className="h-[69px] aspect-square rounded-xl ml-[10px] text-transparent bg-clip-text bg-gradient-to-tr from-[#0ff] to-[#f0f] flex justify-center items-center text-[50px]"><i class="fa-solid fa-comment"></i></div>

      {/* Swipe Up Arrow with Animation */}
      <motion.div
        className="text-[60px] flex flex-col justify-center items-center cursor-pointer"
        initial={{ y: 0 }}
        animate={swipedUp ? { y: -100, opacity: 0 } : { y: 0 }}
        transition={{ duration: 0.5 }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <p className="text-[10px]">drag up to Open</p>
        <i className="fa-solid fa-arrow-up"></i>
      </motion.div>

      <div className="h-[69px] aspect-square rounded-xl ml-[10px] text-transparent bg-clip-text bg-gradient-to-tr from-[#0ff] to-[#f0f] flex justify-center items-center text-[50px]"><i class="fa-solid fa-phone-volume"></i></div>

      {/* Animate the whole screen sliding up */}
      <AnimatePresence>
        {swipedUp && (
          <motion.div
            className="absolute inset-0 bg-black"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LockDown;
