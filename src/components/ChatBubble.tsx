import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser, timestamp }) => {
  const formatTime = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
        isUser 
          ? 'bg-primary text-white rounded-br-sm' 
          : 'bg-gray-100 text-gray-800 rounded-bl-sm'
      }`}>
        <p className="text-sm font-roboto">{message}</p>
        <p className={`text-xs mt-1 ${
          isUser ? 'text-blue-100' : 'text-gray-500'
        }`}>
          {formatTime(timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatBubble;
