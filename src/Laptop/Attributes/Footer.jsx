import React, { useState, useEffect, useRef } from "react";
import Apps from "./Apps";

const icons = [
  {
    title: "About Me",
    iconClass: "fa-solid fa-user",
    gradient: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    link: "https://www.google.com/", // URL for the iframe
  },
  {
    title: "Education",
    iconClass: "fa-solid fa-school",
    gradient: "bg-gradient-to-br from-[#0ff] via-[#00f] to-[#f0f]",
    link: "#",
  },
  {
    title: "Achievements",
    iconClass: "fa-solid fa-award",
    gradient: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    link: "#",
  },
  {
    title: "Contact Me",
    iconClass: "fa-solid fa-comment",
    gradient: "bg-gradient-to-br from-[#0ff] via-[#00f] to-[#f0f]",
    link: "#",
  },
];

const Footer = ({ onIconClick }) => {
  const [Open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const footerRef = useRef(null);

  // Toggle Open/Close with Windows key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.metaKey || event.key === "Control") {
        setOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (footerRef.current && !footerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
  const handleOpenCommon = (url) => {
      onIconClick(url);
    };

  return (
    <div
      ref={footerRef}
      className={`fixed bottom-0 z-10 flex justify-center items-center ${
        Open ? "h-[856px] rounded-[50px] items-end" : "h-[136px] rounded-[50px] items-center"
      }`}
    >
      <div
        className={`flex flex-wrap justify-evenly w-[800px] py-[15px] bg-[#0005] transition-all duration-300 ${
          Open ? "h-[800px] rounded-[50px] items-end" : "h-[80px] rounded-[50px] items-center"
        }`}
      >
        {Open && (
          <div className="h-[700px] w-[750px] flex flex-wrap p-[20px] bg-[#0005] rounded-[45px]">
            <p className="font-Audiowide text-[25px]">ALL APPS</p>
            <Apps searchQuery={searchQuery} onIconClick={handleOpenCommon} />
          </div>
        )}

        {/* Search Input */}
        <input
          type="text"
          placeholder="Search APP"
          className="bg-[#D9D9D9] h-[50px] w-[440px] rounded-full px-5 text-[#000] placeholder:text-[#0008] text-[25px] font-Audiowide"
          value={searchQuery}
          onClick={() => setOpen(true)}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Dynamic Icons */}
        {icons.map((item, index) => (
          <div
            key={index}
            title={item.title}
            onClick={() => onIconClick(item.link)}
            className={`h-[50px] w-[50px] ${item.gradient} text-[30px] rounded-full cursor-pointer flex justify-center items-center text-[#ff0]`}
          >
            <i className={item.iconClass}></i>
          </div>
        ))}

        {/* Toggle Button */}
        <div
          title="click CTRL+"
          className="h-[50px] w-[50px] flex gap-[2px] flex-wrap cursor-pointer"
          onClick={() => setOpen(!Open)}
        >
          <div className="h-[24px] w-[24px] bg-[#FF0000] rounded-lg"></div>
          <div className="h-[24px] w-[24px] bg-[#00A600] rounded-lg"></div>
          <div className="h-[24px] w-[24px] bg-[#0037FF] rounded-lg"></div>
          <div className="h-[24px] w-[24px] bg-[#FFB900] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
