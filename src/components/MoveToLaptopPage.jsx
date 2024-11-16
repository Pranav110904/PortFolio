import React, { useEffect, useState } from "react";

const MoveToLaptopPage = () => {
  const [isRestricted, setIsRestricted] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const screenWidth = window.innerWidth;
      // Detect if the screen is mobile (less than 768px) or tablet (768px to 1024px)
      if (screenWidth <= 1024) {
        setIsRestricted(true);  // Block both mobile and tablet devices
      } else {
        setIsRestricted(false);
      }
    };

    checkDevice(); // Initial check
    window.addEventListener("resize", checkDevice); // Check on resize

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return (
    <div>
      {isRestricted && (
        <>
          {/* Dark Overlay to block all content */}
          <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
            <div className="text-center text-white p-6 bg-black rounded-lg">
              <h2 className="text-2xl font-semibold">Please move to a laptop screen!</h2>
              <p className="mt-2 text-sm">For optimal viewing, please switch to a laptop or desktop device.</p>
            </div>
          </div>

          {/* Prevent interaction with the page */}
          <div className="pointer-events-none">
            {/* Your website content goes here, which will be blocked */}
            <div className="mt-20 text-center">
              <h1 className="text-3xl font-bold">Welcome to the Website</h1>
              {/* More content */}
            </div>
          </div>
        </>
      )}
      {/* Content that is visible when not on restricted devices */}
      {!isRestricted && (
        <div className="mt-20 text-center">
          
        </div>
      )}
    </div>
  );
};

export default MoveToLaptopPage;
