import React from "react";

const appsList = [
  {
    id: "Facebook",
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100092589737963&sk=grid",
    color: "bg-[#1877F2]",
    icon: "fa-brands fa-facebook-f",
    fontSize: "text-[60px]",
    alignment: "items-end",
    fontColor: "text-[#fff]",
  },
  {
    id: "Github",
    name: "Github",
    link: "https://github.com/Rajdeep2302",
    color: "bg-[#181717]",
    icon: "fa-brands fa-github",
    fontSize: "text-[60px]",
    alignment: "items-center",
    fontColor: "text-[#fff]",
  },
  {
    id: "HackerRank",
    name: "HackerRank",
    link: "https://www.hackerrank.com/profile/www_rajdeep_gov1",
    color: "bg-[#2EC866]",
    icon: "fa-brands fa-hackerrank",
    fontSize: "text-[60px]",
    alignment: "items-center",
    fontColor: "text-[#000]",
  },
  {
    id: "Instagram",
    name: "Instagram",
    link: "https://www.instagram.com/rajdeeppal2005/",
    color: "bg-gradient-to-br from-[#833AB4] via-[#E4405F] to-[#FCAF45]",
    icon: "fa-brands fa-instagram",
    fontSize: "text-[70px]",
    alignment: "items-center",
    fontColor: "text-[#fff]",
  },
  {
    id: "Linkedin",
    name: "Linkedin",
    link: "https://www.linkedin.com/in/rajdeep-pal-1b12b02b7/",
    color: "bg-[#0077B5]",
    icon: "fa-brands fa-linkedin-in",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#fff]",
  },
  {
    id: "About",
    name: "About Me",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-user",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "Education",
    name: "Education",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-school",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "Achievements",
    name: "Achievements",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-award",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "Contact",
    name: "Contact Me",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-comment",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "Skill",
    name: "Skill",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-code",
    fontSize: "text-[50px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "Projects",
    name: "Projects",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-diagram-project",
    fontSize: "text-[40px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
  {
    id: "X",
    name: "X-Twitter",
    link: "https://x.com/RajdeepPal40894?t=aw5pONHrM1uJFuwcFXYS_g&s=09",
    color: "bg-[#000000]",
    icon: "fa-brands fa-x-twitter",
    fontSize: "text-[40px]",
    alignment: "items-center",
    fontColor: "text-[#FFFFFF]",
  },
  {
    id: "Gallery",
    name: "Gallery",
    link: "#",
    color: "bg-gradient-to-tr from-[#0ff] via-[#00f] to-[#f0f]",
    icon: "fa-solid fa-image",
    fontSize: "text-[40px]",
    alignment: "items-center",
    fontColor: "text-[#ff0]",
  },
];

const Apps = ({ searchQuery, onIconClick }) => {
  const filteredApps = appsList
    .filter((app) => app.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name)); 

  return (
    <div className="h-[600px] w-[700px] overflow-auto grid grid-cols-6 gap-5 justify-items-center items-start">
      {filteredApps.map((app) => (
        <div
          key={app.id}
          id={app.id}
          className="flex justify-center items-center flex-col cursor-pointer"
        >
          <div onClick={() => onIconClick(app.link)}>
            <div
              className={`h-[75px] w-[75px] ${app.color} ${app.alignment} ${app.fontColor} rounded-[25px] flex justify-center items-center`}
            >
              <i className={`${app.icon} ${app.fontSize}`}></i>
            </div>
          </div>
          <p className="font-Audiowide text-[12px]">{app.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Apps;
