import React, { useEffect, useRef } from "react";
import InputBar from "../components/InputBar";
import ChatMessage from "../components/ChatMessage";
import UserInfo from "../components/UserInfo";

interface WebchatProps {
  messages: {
    id: string;
    message: string;
    sender: {
      name: string;
      role: string;
    };
  }[];
  user: {
    name: string;
    email: string;
    organisationId: string;
  } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      organisationId: string;
    } | null>
  >;
  handleSendMessage: (message: string) => void;
}

const Webchat: React.FC<WebchatProps> = ({
  messages,
  user,
  setUser,
  handleSendMessage,
}) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSetUser = (
    name: string,
    email: string,
    organisationId: string
  ) => {
    const userInfo = { name, email, organisationId };
    setUser(userInfo);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };

  if (!user) {
    return <UserInfo setUser={handleSetUser} />;
  }

  return (
    <div className="flex flex-col absolute p-4 bg-gray-100 w-full h-full rounded-lg items-center">
      <div className="bg-blue-500 text-white text-center py-1 px-2 rounded-lg text-xs font-semibold w-fit mb-1">
        Powered by{" "}
        <a href="https://smartyr.biz" target="_blank" rel="noreferrer">
          Smartyr
        </a>
      </div>
      <div className="flex-1 overflow-y-auto relative w-full">
        {messages.map((msg, index) => {
          const showName =
            index === 0 || messages[index - 1].sender.name !== msg.sender.name;
          return (
            <ChatMessage
              key={index}
              message={msg.message}
              sender={msg.sender}
              showName={showName}
            />
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <InputBar sendMessage={handleSendMessage} sendingMessage={false} />
    </div>
  );
};

export default Webchat;
