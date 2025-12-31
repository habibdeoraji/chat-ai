import React from "react";
import { MailIcon, PencilIcon, DocumentIcon, ChatBubbleIcon } from "../../assets/icons";
const cards = [
  {
    id: 1,
    icon: <MailIcon className="w-6 h-6" />,
    title: "Draft email",
    description: "Generate email for any occasion you need.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    prompt: "Draft email"
  },
  {
    id: 2,
    icon: <PencilIcon className="w-6 h-6" />,
    title: "Write an Essay",
    description: "Generate essay for any occasion you need.",
    iconBg: "bg-green-50",
    iconColor: "text-green-700",
    prompt: "Write an Essay"
  },
  {
    id: 3,
    icon: <DocumentIcon className="w-6 h-6" />,
    title: "Planning",
    description: "Plan for any occasion, from holiday to family.",
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-700",
    prompt: "Planning"
  },
  {
    id: 4,
    icon: <ChatBubbleIcon className="w-6 h-6" />,
    title: "Assistant",
    description: "Become your personal assistant. Helping you.",
    iconBg: "bg-orange-50",
    iconColor: "text-orange-700",
    prompt: "Assistant"
  }
];


const PromptCards = ({ onCardClick }) => {


  return (
    <div className="flex flex-col items-center justify-start sm:justify-center min-h-full px-4 py-6 sm:py-8">
      {/* Greeting */}
      <div className="w-full sm:max-w-3xl mb-8 sm:mb-12 md:mb-16 text-left">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-700 leading-tight">
          Hey, I'm <span className="text-neutral-900">Chat AI</span>. Your AI assistant and companion for any occasion.
        </h1>
      </div>

      {/* Prompt Cards */}
      <div className="w-full sm:max-w-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {cards.map((card) => (
          <button
            key={card.id}
            onClick={() => onCardClick(card.prompt)}
            className="bg-white border border-neutral-200 rounded-lg p-4 sm:p-5 lg:aspect-square lg:flex lg:flex-col lg:justify-center hover:border-indigo-300 hover:shadow-md transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 text-left"
          >
            <div className="flex flex-col items-center text-center">
              {/* Icon */}
              <div className={`${card.iconBg} ${card.iconColor} w-12 h-12 rounded-full flex items-center justify-center mb-3`}>
                {card.icon}
              </div>
              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 mb-2">
                {card.title}
              </h3>
              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PromptCards;

