import React, { useState } from "react";
import SideBar from "./components/layout/SideBar";
import ChatArea from "./components/layout/ChatArea";
import InputBar from "./components/layout/InputBar";
import TopBar from "./components/layout/TopBar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const handleCardClick = (text) => {
    setInputValue(text);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <TopBar onMenuClick={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <SideBar isOpen={isSidebarOpen} onClose={closeSidebar} />
      <div className="flex flex-col flex-1 lg:ml-0 overflow-hidden">
        <div className={`lg:hidden ${isSidebarOpen ? 'h-0' : 'h-14'}`}></div>
        <ChatArea onCardClick={handleCardClick} />
        <InputBar inputValue={inputValue} setInputValue={setInputValue} />
      </div>
    </div>
  );
}

export default App;
