import React from "react";
import { MenuIcon } from "../../assets/icons";
import Type3Url from "../../assets/Type3.svg";

const TopBar = ({ onMenuClick, isSidebarOpen }) => {
  // Only show TopBar when sidebar is closed on mobile/tablet
  if (isSidebarOpen) return null;

  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src={Type3Url} alt="Chat AI" className="h-6 sm:h-7" />
      </div>
      <button
        onClick={onMenuClick}
        className="p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
        aria-label="Open menu"
      >
        <MenuIcon className="w-6 h-6 text-neutral-700" />
      </button>
    </div>
  );
};

export default TopBar;

