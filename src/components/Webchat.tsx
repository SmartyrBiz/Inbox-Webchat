import React, { useEffect, useRef } from "react";
import InputBar from "../components/InputBar";
import ChatMessage from "../components/ChatMessage";
import UserInfo from "../components/UserInfo";
import ImageMessage from "./ImageMessage";

interface WebchatProps {
  theme: string;
  messages: {
    id: string;
    message?: string;
    photoUrl?: string;
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
      phone: string;
      organisationId: string;
    } | null>
  >;
  handleSendImage: (url: string) => void;
  handleSendMessage: (message: string) => void;
}

const Webchat: React.FC<WebchatProps> = ({
  theme,
  messages,
  user,
  setUser,
  handleSendImage,
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
    phone: string,
    organisationId: string
  ) => {
    const userInfo = { name, email, phone, organisationId };
    setUser(userInfo);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  };

  if (!user) {
    return <UserInfo theme={theme} setUser={handleSetUser} />;
  }

  return (
    <div className="flex flex-col absolute px-4 pb-1 bg-gray-100 w-full h-full rounded-lg items-center">
      <div className="flex-1 overflow-y-auto relative w-full">
        {messages.map((msg, index) => {
          const showName =
            index === 0 || messages[index - 1].sender.name !== msg.sender.name;
          return (
            <>
              {msg.photoUrl && (
                <ImageMessage
                  theme={theme}
                  key={index}
                  photoUrl={msg.photoUrl}
                  sender={msg.sender}
                  showName={showName}
                />
              )}
              {msg.message && (
                <ChatMessage
                  theme={theme}
                  key={index}
                  message={msg.message}
                  sender={msg.sender}
                  showName={showName}
                />
              )}
            </>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <InputBar
        theme={theme}
        sendMessage={handleSendMessage}
        sendImage={handleSendImage}
        sendingMessage={false}
      />
    </div>
  );
};

export default Webchat;
