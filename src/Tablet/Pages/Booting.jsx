import React, { useEffect, useState } from 'react'
import BootPagesT from '../Pages/BootPagesT'
import LockScreenT from '../Pages/LockScreenT'

const Booting = () => {
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
      {showLockScreen ? <LockScreenT /> : <BootPagesT />}
    </>
  )
}

export default Booting
