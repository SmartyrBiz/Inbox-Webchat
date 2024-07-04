import React, { useEffect, useRef, useState } from "react";
import InputBar from "../components/InputBar";
import ChatMessage from "../components/ChatMessage";
import UserInfo from "../components/UserInfo";
import ImageMessage from "./ImageMessage";
import { getTextColorBasedOnBackground } from "../utils/getTextColorBasedOnBackground";

interface WebchatProps {
  theme: string;
  messages: {
    id: string;
    message?: string;
    url?: string;
    sender: {
      name: string;
      role: string;
    };
  }[];
  user: {
    name: string;
    contactId: string;
  } | null;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      contactId: string;
    } | null>
  >;
  handleSendWelcomeMessage: (isOpen: boolean) => void;
  handleSendImage: (url: string) => void;
  handleSendMessage: (message: string) => void;
}

const Webchat: React.FC<WebchatProps> = ({
  theme,
  messages,
  user,
  setUser,
  handleSendWelcomeMessage,
  handleSendImage,
  handleSendMessage,
}) => {
  const timezone = window.WebChatConfig.timezone;
  const openAt = window.WebChatConfig.openAt;
  const closeAt = window.WebChatConfig.closedAt;
  let openedDays = window.WebChatConfig.openedDays;

  const dayOrder = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  openedDays = openedDays.sort(
    (a, b) => dayOrder.indexOf(a) - dayOrder.indexOf(b)
  );

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [toggleInfo, setToggleInfo] = useState(false);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function isOpen() {
    const now = new Date();

    // Convert the current time to the specified timezone
    const localTime = now.toLocaleString("en-US", {
      timeZone: timezone,
    });
    const localDate = new Date(localTime);

    const currentDay = localDate.toLocaleDateString("en-US", {
      weekday: "long",
    });
    const currentTime = localDate.toTimeString().slice(0, 5);

    if (!openedDays.includes(currentDay)) {
      return false;
    }

    if (currentTime >= openAt && currentTime <= closeAt) {
      return true;
    }

    return false;
  }

  const handleSetUser = (name: string, contactId: string) => {
    const userInfo = { name, contactId };
    setUser(userInfo);
    sessionStorage.setItem("user", JSON.stringify(userInfo));
    handleSendWelcomeMessage(isOpen());
  };

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (!user) {
        return;
      }

      const confirmationMessage = "Are you sure you want to leave?";
      event.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  if (!user) {
    return <UserInfo theme={theme} setUser={handleSetUser} />;
  }

  return (
    <div className="flex flex-col absolute  pb-1 bg-gray-100 w-full h-full rounded-lg items-center">
      <div
        style={{
          backgroundColor: theme,
          color: getTextColorBasedOnBackground(theme),
        }}
        className={`rounded-t-lg shadow w-full  p-4 flex justify-between items-center text-sm`}
      >
        {!toggleInfo ? (
          <>
            <span className="font-[500]">
              We're {isOpen() ? "open 👋" : "closed ☹️"}
            </span>
            <div className="flex items-center gap-2">
              <span className="font-[500]">
                {parseInt(openAt) > 12
                  ? parseInt(openAt) - 12
                  : parseInt(openAt)}{" "}
                {parseInt(openAt) >= 12 ? "PM" : "AM"} - {" "}
                {parseInt(closeAt) > 12
                  ? parseInt(closeAt) - 12
                  : parseInt(closeAt)}{" "}
                {parseInt(closeAt) >= 12 ? "PM" : "AM"}
              </span>
              <button onClick={() => setToggleInfo((prev) => !prev)}>
                <svg
                  className="transition-transform duration-300 hover:scale-110"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8"
                  />
                </svg>
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center font-[500] text-center">
            Hey, we're open {openedDays.join(", ").toLowerCase()}, from{" "}
            {parseInt(openAt) > 12 ? parseInt(openAt) - 12 : parseInt(openAt)}{" "}
            {parseInt(openAt) >= 12 ? "PM" : "AM"} to{" "}
            {parseInt(closeAt) > 12
              ? parseInt(closeAt) - 12
              : parseInt(closeAt)}{" "}
            {parseInt(closeAt) >= 12 ? "PM" : "AM"}. Please feel free to leave a
            message, and we'll get back to you ASAP.
            <a
              className="underline mt-1 cursor-pointer"
              onClick={() => setToggleInfo((prev) => !prev)}
            >
              hide this message
            </a>
          </div>
        )}
      </div>
      <div className="flex-1 overflow-y-auto relative w-full p-2">
        {messages.map((msg, index) => {
          const showName =
            index === 0 ||
            messages[index - 1].sender.name !== msg.sender.name ||
            messages[index - 1].sender.role !== msg.sender.role;
          return (
            <div key={index}>
              {msg.url && (
                <ImageMessage
                  theme={theme}
                  key={index}
                  photoUrl={msg.url}
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
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="px-3 w-full">
        <InputBar
          theme={theme}
          user={user}
          sendMessage={handleSendMessage}
          sendImage={handleSendImage}
          sendingMessage={false}
        />
      </div>
    </div>
  );
};

export default Webchat;
