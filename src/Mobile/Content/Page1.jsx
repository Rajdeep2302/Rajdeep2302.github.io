import React, { useState, useEffect } from "react";

const appLinks = [
  {
    name: "HackerRank",
    icon: "fa-brands fa-hackerrank",
    link: "https://www.hackerrank.com/profile/www_rajdeep_gov1",
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/profile.php?id=100092589737963&sk=grid",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/rajdeeppal2005/",
  },
  {
    name: "X-Twitter",
    icon: "fa-brands fa-x-twitter",
    link: "https://x.com/RajdeepPal40894?t=aw5pONHrM1uJFuwcFXYS_g&s=09",
  },
  {
    name: "Linkedin",
    icon: "fa-brands fa-linkedin-in",
    link: "https://www.linkedin.com/in/rajdeep-pal-1b12b02b7/",
  },
  {
    name: "Github",
    icon: "fa-brands fa-github",
    link: "https://github.com/Rajdeep2302/",
  },
  { name: "Setting", icon: "fa-solid fa-gear", link: "#" },
  { name: "Gallery", icon: "fa-solid fa-image", link: "#" },
  { name: "Skill", icon: "fa-solid fa-code", link: "#" },
  { name: "Projects", icon: "fa-solid fa-diagram-project", link: "#" },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com/",
  },
  {
    name: "Gmail",
    icon: "fa-solid fa-envelope",
    link: "https://mail.google.com/",
  },
];

const Page1 = () => {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    period: "AM",
  });
  const [search, setSearch] = useState(""); // Search state
  const [openSearchPage, setOpenSearchPage] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert 0 (midnight) to 12
      setTime({ hours: hours.toString().padStart(2, "0"), minutes, period });
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Filter apps based on search query (case-insensitive)
  const filteredApps = appLinks.filter((app) =>
    app.name.toLowerCase().includes(search.toLowerCase())
  );

  // Show only first 10 apps when search is empty, otherwise show all matching apps
  const visibleApps = search
    ? filteredApps
    : openSearchPage
    ? appLinks
    : appLinks.slice(0, 10);

  const openSearchPageFunction = () => {
    setOpenSearchPage(true);
  };

  const closeSearchPageFunction = () => {
    setOpenSearchPage(false);
    setSearch("");
  };

  return (
    <div className="h-full flex flex-col justify-between">
      {/* Time Display */}
      <div className="text-[75px] pt-[75px] font-Workbench flex flex-col w-screen items-end pr-5">
        <div className="bg-[#000a] flex flex-col p-3 rounded-xl">
          <span className="-my-5">{time.hours}</span>
          <span className="-my-5">{time.minutes}</span>
          <span className="-my-5 text-end text-[30px]">{time.period}</span>
        </div>
      </div>

      {/* Search & App Grid */}
      <div
        className={`${
          openSearchPage
            ? "h-[calc(100vh-100px)] w-screen absolute flex top-[20px] pt-[10px] overflow-auto bg-[#0005]"
            : "h-fit w-screen flex bg-transparent"
        } flex-col  items-center`}
      >
        {/* Search Input */}
        <div className="flex justify-end items-center">
          <input
            type="text"
            className={`${
              openSearchPage ? "sticky" : "relative"
            } w-[90vw] h-[50px] text-black rounded-full text-[25px] px-3 font-Audiowide`}
            placeholder="Search App"
            value={search}
            onClick={openSearchPageFunction}
            onChange={(e) => setSearch(e.target.value)}
          />
          {!openSearchPage ? (
            <div
              onClick={openSearchPageFunction}
              className="text-black absolute text-[30px] pr-[10px]"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          ) : (
            <div
              className="text-black absolute text-[30px] pr-[10px]"
              onClick={closeSearchPageFunction}
            >
              <i class="fa-solid fa-circle-xmark"></i>
            </div>
          )}
        </div>

        {/* App Icons Grid */}
        <div className="w-screen grid grid-cols-5 my-5 gap-4 px-5">
          {visibleApps.length > 0 ? (
            visibleApps.map((app, index) => (
              <a href={app.link} key={index}>
                <div className="flex flex-col justify-center items-center">
                  <div className="bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f] h-[50px] text-[#fff] text-center flex justify-center text-[30px] items-center w-[50px] rounded-xl">
                    <i className={`${app.icon}`}></i>
                  </div>
                  <p className="text-center text-[10px] font-Audiowide">
                    {app.name}
                  </p>
                </div>
              </a>
            ))
          ) : (
            <p className="text-white text-center w-full">No apps found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page1;
