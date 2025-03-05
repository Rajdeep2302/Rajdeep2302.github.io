import React from "react";

const footerItems = [
  { title: "About me", icon: "fa-user", link: "#" },
  { title: "Achievements", icon: "fa-award", link: "#" },
  { title: "Education", icon: "fa-school", link: "#" },
  { title: "Skill", icon: "fa-code", link: "#" },
  { title: "Contact me", icon: "fa-comment", link: "#" },
];

const FooterApp = () => {
  return (
    <div className="h-[80px] w-screen justify-evenly items-center flex">
      {footerItems.map((item, index) => (
        <a href={item.link} key={index}>
          <div
            title={item.title}
            className="h-[50px] aspect-square flex justify-center items-center text-[30px] bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f] rounded-xl"
          >
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FooterApp;
    