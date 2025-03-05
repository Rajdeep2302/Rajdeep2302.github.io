import React from "react";
import Header from "../Content/Header";
import { assets } from "../../assets/assets";
// import Footer from "../Content/Footer";
import FooterApp from "../Content/FooterApp";
import Page1 from "../Content/Page1";

const MobileHome = () => {
  return (
    <>
      <img
        src={assets.image2}
        className="h-screen absolute w-screen object-cover object-center"
        alt=""
      />
      <div className="z-30 absolute flex flex-col justify-between h-screen">
        <Header />
        <Page1/>
        <div>
          <FooterApp />
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default MobileHome;
