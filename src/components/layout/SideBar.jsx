import React from "react";
import UserCard from "../sidebar/UserCard";
import Button from "../ui/Button";
import Chats from "../sidebar/Chats";
import LogomarkUrl from "../../assets/Logomark.svg";
import Type3Url from "../../assets/Type3.svg";
import { SparklingLineIcon, CloseIcon } from "../../assets/icons";

const SideBar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay for mobile/tablet */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity duration-300"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-full
          w-[66.666667%] lg:w-72 bg-white border-r border-neutral-200 p-3 sm:p-4 
          flex flex-col justify-between
          z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header with Logo and Close Button */}
        <div className="flex items-center justify-between mb-4 lg:mb-0">
          {/* Mobile/Tablet: Logo */}
          <div className="flex items-center lg:hidden">
            <img src={Type3Url} alt="Chat AI" className="h-6 sm:h-7" />
          </div>
          {/* Desktop: Logo */}
          <div className="hidden lg:flex items-center p-2">
            <img src={Type3Url} alt="Logo" className="w-20" />
          </div>
          {/* Close button - only visible on mobile/tablet */}
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            aria-label="Close menu"
          >
            <CloseIcon className="w-5 h-5 text-neutral-700" />
          </button>
        </div>

        <Chats />
        <div className="flex flex-col gap-2">
          <Button
            variant="secondary"
            iconPosition="left"
            icon={<SparklingLineIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
            className="text-xs sm:text-sm font-normal sm:font-medium px-3 sm:px-4 py-2"
          >
            Start new chat
          </Button>
          <UserCard />
        </div>
      </aside>
    </>
  );
};

export default SideBar;
