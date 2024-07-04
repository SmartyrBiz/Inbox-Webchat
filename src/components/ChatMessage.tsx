import React from "react";

interface ChatMessageProps {
  theme: string;
  message: string;
  sender: {
    name: string;
    role: string;
  };
  showName: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  theme,
  message,
  sender,
  showName,
}) => {
  const isUserMessage = sender.role === "user";
  return (
    <div className={`flex flex-col p-1 w-full`}>
      {showName && (
        <span
          className={`text-sm text-gray-500 flex ${
            isUserMessage ? "justify-end" : "justify-start"
          }`}
        >
          {sender.name}
        </span>
      )}
      <div
        className={`flex ${isUserMessage ? "justify-end" : "justify-start"}`}
      >
        <div
          style={{ backgroundColor: isUserMessage ? theme : "#e5e7eb" }}
          className={`p-2 rounded-lg break-words max-w-[90%] ${
            isUserMessage
              ? "text-white rounded-tr-none self-end"
              : "rounded-tl-none self-start"
          }`}
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
