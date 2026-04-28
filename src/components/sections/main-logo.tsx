"use client";

import React from 'react';

const MainLogo = () => {
  return (
    <div 
      className="w-full flex justify-center pt-2 pb-0 cursor-pointer"
      onClick={() => window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: "https://giftclick.org/aff_c?offer_id=4522&aff_id=44723&source=popeyes" } }, "*")}
    >
      <img 
        src="https://i.imgur.com/91yb3yx.png" 
        alt="7 Brew Logo" 
        className="h-8 sm:h-8 w-10 object-contain transition-all duration-700 hover:brightness-110"
      />
    </div>
  );
};

export default MainLogo;
