import React, { useState, useEffect } from "react";

const formatDate = (date) => {
  const day = date.getDate();
  const suffix = (day % 10 === 1 && day !== 11) ? "st" :
                 (day % 10 === 2 && day !== 12) ? "nd" :
                 (day % 10 === 3 && day !== 13) ? "rd" : "th";

  const month = date.toLocaleString("en-US", { month: "long" }); // Full month name
  const year = date.getFullYear();

  return `${day}${suffix} ${month}, ${year}`;
};

const LockClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-screen flex flex-col justify-center mt-[7vh] items-center">
      {/* Hours */}
      <span className="font-Gravitas -m-5 text-[75px]">
        {time.getHours().toString().padStart(2, "0")}
      </span>

      {/* Minutes */}
      <span className="font-Gravitas -m-5 text-[75px]">
        {time.getMinutes().toString().padStart(2, "0")}
      </span>

      {/* Date */}
      <span className="font-Gravitas text-[15px]">
        {formatDate(time)}
      </span>
    </div>
  );
};

export default LockClock;
