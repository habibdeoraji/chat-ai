import React, { useState, useEffect } from "react";
import Input from "../ui/Input";
import Button from "./../ui/Button";
import { SendIcon } from "../../assets/icons";

const InputBar = ({ inputValue, setInputValue }) => {
  const [userInput, setUserInput] = useState("");
  
  // Sync with parent inputValue prop
  useEffect(() => {
    if (inputValue) {
      setUserInput(inputValue);
      if (setInputValue) {
        setInputValue(""); // Reset parent after setting
      }
    }
  }, [inputValue, setInputValue]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.trim() !== "") {
      // Handle submit logic here
      console.log("Submitted:", userInput);
      setUserInput("");
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-3 sm:p-4 md:p-6 flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-3 transition-all duration-300 bg-white "
    >
      <div className="w-full sm:max-w-3xl flex-1 flex items-center gap-2 sm:gap-3">
        <Input
          className="flex-1 h-10 sm:h-11 md:h-12 text-sm sm:text-base transition-all duration-200 transform focus:scale-[1.01]"
          placeholder="Ask me anything..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        {/* Mobile: Icon only */}
        <Button
          icon={<SendIcon />}
          iconPosition="only"
          variant="primary"
          type="submit"
          disabled={userInput.trim() === ""}
          className="h-10 w-10 sm:hidden flex-shrink-0 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        />
        {/* Desktop/Tablet: Icon + Text */}
        <Button
          icon={<SendIcon />}
          iconPosition="left"
          variant="primary"
          type="submit"
          disabled={userInput.trim() === ""}
          className="hidden sm:flex h-11 md:h-12 px-4 flex-shrink-0 transition-all duration-200 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default InputBar;
