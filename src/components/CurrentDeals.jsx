import React from "react";

export const CurrentDeals = () => {
  return (
    <div className="bg-gradient-to-r from-[#2A7B9B] via-[#82E364] to-[#57C785] text-white py-1 px-4 text-base text-center flex items-center justify-center gap-2 ">
      <span role="img" aria-label="fire" className="text-lg">🔥</span>
      <span className="text-sm">
        Up to <strong className="font-bold underline ">50% OFF</strong> on Summer Sale!
      </span>
    </div>
  );
};
