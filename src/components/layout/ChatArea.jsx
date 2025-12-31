import React from 'react'
import PromptCards from '../chatArea/PromptCards'

const ChatArea = ({ onCardClick }) => {
  return (
    <main className="flex-1 overflow-y-auto p-4">
      <PromptCards onCardClick={onCardClick} />
    </main>
  )
}

export default ChatArea

