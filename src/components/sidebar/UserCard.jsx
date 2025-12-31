import React from "react";
import Button from "../ui/Button";

const UserCard = () => {
  return (
    <div className="flex flex-col border-[1px] rounded-lg p-3 sm:p-4">
      <h3 className="text-xs sm:text-sm font-medium sm:font-semibold mb-2">Let's create an account</h3>
      <p className="text-[10px] sm:text-xs mb-3 sm:mb-4 leading-relaxed">
        Save your chat history, share chat, and personalize your experience.
      </p>
      <Button 
        variant="primary" 
        onClick={() => console.log("Sign In")}
        className="text-xs sm:text-sm font-normal sm:font-medium py-2 sm:py-2"
      >
        Sign In
      </Button>
      <Button 
        variant="secondary"
        className="text-xs sm:text-sm font-normal sm:font-medium py-2 sm:py-2"
      >
        Create account
      </Button>
    </div>
  );
};

export default UserCard;
