import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = [
  "Student",
  "Coder",
  "Creative Developer",
  "Problem Solver",
  "Designer",
];
import { assets } from "../../assets/assets";
import Common from "../App/Common";

const Wallpaper = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-evenly z-10 items-center w-screen">
      <div className="flex justify-center items-end">
        <img
          src={assets.me}
          alt="me"
          className="rounded-bl-[45%] rounded-br-[30%] rounded-tl-[60%] rounded-tr-[70%] z-10 h-[650px] aspect-auto absolute"
        />
        <div className="rounded-bl-[200%] rounded-br-[210%] rounded-tl-[175%] rounded-tr-[400%] bg-[#0ff] h-[375px] w-[540px]"></div>
        <div className="rounded-bl-[200%] absolute rounded-br-[210%] rounded-tl-[175%] rounded-tr-[400%] bg-[#0ff] h-[375px] w-[540px] blur-3xl"></div>
      </div>
      <div>
        <p className="text-[40px] font-Audiowide">Hi</p>
        <p className="text-[50px] font-Audiowide">
          I’m <strong className="text-[60px] text-[#0ff]">RAJDEEP</strong>{" "}
        </p>
        <div className="font-Kaushan flex gap-5">
          <p className="font-Kaushan text-[45px]">A</p>
          <motion.span
            key={wordIndex} // Key is correctly defined to trigger animations on change
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="font-Kaushan text-[45px]"
          >
            {words[wordIndex]}
          </motion.span>
        </div>
      </div>
    </div>
  );
};

export default Wallpaper;
