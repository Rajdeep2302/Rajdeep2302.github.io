import React, { useState } from "react";
import Wallpaper from "../Attributes/Wallpaper.jsx";
import Header from "../Attributes/Header";
import Footer from "../Attributes/Footer";
import WallpaperDesine from "../Attributes/WallpaperDesine";
import Common from "../App/Common.jsx";

const HomePage = () => {
  const [showCommon, setShowCommon] = useState(false);
  const [iframeSrc, setIframeSrc] = useState(""); // Store the URL for iframe

  // Function to open Common with a specific URL
  const handleOpenCommon = (url) => {
    setIframeSrc(url);
    setShowCommon(true);
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="absolute h-screen w-screen">
        <WallpaperDesine />
      </div>
      <Header />
      <Wallpaper />
      <Footer onIconClick={handleOpenCommon} />

      {showCommon && (
        <div className="absolute z-50 h-screen w-screen flex justify-center items-center">
          <Common src={iframeSrc} onClose={() => setShowCommon(false)} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
