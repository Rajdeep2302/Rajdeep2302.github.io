import React, { useState, useEffect } from "react";
import BootPages from "./Laptop/Pages/BootPages";
import LockScreen from "./Laptop/Pages/LockScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./Laptop/Pages/HomePage";
import Booting from "./Tablet/Pages/Booting";
import TabLockScreen from "./Tablet/Pages/TabLockScreen";
import MobileLockScreen from './Mobile/page/MobileLockScreen';
import BootingM from './Mobile/page/BootingM';
import './index.css';
import MobileHome from "./Mobile/page/MobileHome";


const App = () => {
  const [showLockScreen, setShowLockScreen] = useState(false);

  useEffect(() => {
    // Set timeout to switch to LockScreen after 2.5 seconds
    const timer = setTimeout(() => {
      setShowLockScreen(true);
    }, 2500);

    // Cleanup the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="h-screen hidden xl:block w-screen animated-bg text-white">
        <Routes>
          <Route path="/" element={showLockScreen ? <LockScreen /> : <BootPages />}/>
          <Route path="/HomePage" element={<HomePage/>}/>
        </Routes>
      </div>
      <div className="h-screen hidden sm:block xl:hidden w-screen bg-gradient-to-bl from-[#4E003F] to-[#020044] text-white">
        <Routes>
          <Route path="/" element={showLockScreen ? <TabLockScreen/> : <Booting/>}/>
        </Routes>
      </div>
      <div className="h-screen block sm:hidden w-screen bg-gradient-to-bl from-[#4E003F] to-[#020044] text-white">
        <Routes>
          <Route path="/" element={showLockScreen ? <MobileLockScreen/> : <BootingM/>}/>
          <Route path="/MobileHome" element={<MobileHome/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
