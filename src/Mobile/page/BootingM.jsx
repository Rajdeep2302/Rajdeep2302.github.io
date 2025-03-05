import React, { useEffect, useState } from 'react'
import LockScreenM from './LockScreenM';
import BootPagesM from './BootPagesM';

const BootingM = () => {
    const [showLockScreen, setShowLockScreen] = useState(false);
    
      useEffect(() => {
        // Set timeout to switch to LockScreen after 2.5 seconds
        const timer = setTimeout(() => {
          setShowLockScreen(true);
        }, 1000);
    
        // Cleanup the timer to avoid memory leaks
        return () => clearTimeout(timer);
      }, []);
  return (
    <>
      {showLockScreen ? <LockScreenM /> : <BootPagesM />}
    </>
  )
}

export default BootingM
