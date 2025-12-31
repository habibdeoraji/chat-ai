import React from "react";
import Button from "../ui/Button";
import { ElectricalBoltIcon } from "../../assets/icons";

const Chats = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Button
        variant="secondary"
        className="max-h-10 w-full text-xs sm:text-sm font-normal sm:font-medium !justify-start px-3 sm:px-4"
        iconPosition="left"
        icon={<ElectricalBoltIcon className="w-4 h-4 sm:w-5 sm:h-5" />}
      >
        Ongoing prompt
      </Button>
    </div>
  );
};

export default Chats;
