import { useState, useEffect, useRef, FC } from "react";
import { useMutation, useSubscription } from "@apollo/client";
import Webchat from "./components/Webchat";
import { MESSAGE_SUBSCRIPTION } from "./graphql/MESSAGE_SUBSCRIPTION";
import notification from "./assets/notification.wav";
import { SEND_CHAT_MESSAGE } from "./graphql/SEND_CHAT_MESSAGE";
import { getTextColorBasedOnBackground } from "./utils/getTextColorBasedOnBackground";

const App: FC = () => {
  const color = window.WebChatConfig.color;
  const organisationId = window.WebChatConfig.organisationId;

  const [open, setOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [messages, setMessages] = useState<
    {
      id: string;
      message?: string;
      photoUrl?: string;
      sender: {
        name: string;
        role: string;
      };
    }[]
  >([]);
  const [user, setUser] = useState<{
    name: string;
    contactId: string;
  } | null>(null);
  const [sendEmbedWebchatMessage] = useMutation(SEND_CHAT_MESSAGE);
  const [unseenMessages, setUnseenMessages] = useState(0);
  const openRef = useRef(open);
<<<<<<< HEAD

  const handleSendWelcomeMessage = async (isOpen: boolean) => {
    const tempId = new Date().toISOString();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: tempId,
        message: `Hey there! We're ${
          isOpen ? "here to help!" : "closed right now."
        }`,
        sender: {
          name: "[BOT] Smartyr",
          role: "support",
        },
      },
      {
        id: tempId,
        message: `Please leave a message, and we'll get back to you ASAP, either by webchat or email.`,
        sender: {
          name: "[BOT] Smartyr",
          role: "support",
        },
      },
    ]);
  };
=======
>>>>>>> c29d3eb466dfd2fd2173ff969f5deb75cdaeacad

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      #webchat-container {
        scrollbar-width: thin;
        scrollbar-color: #${color} #f3f4f6;
      }

      /* Chrome, Edge, and Safari */
      #webchat-container::-webkit-scrollbar {
        width: 16px;
      }

      #webchat-container::-webkit-scrollbar-track {
        background: #f3f4f6;
      }

      #webchat-container::-webkit-scrollbar-thumb {
        background-color: #${color};
        border-radius: 10px;
        border: 3px none #ffffff;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (!organisationId) {
      alert(
        "If you're an admin, please provide the organisation ID in the URL to use Smartyr Webchat"
      );
      return;
    }
  }, []);

  useEffect(() => {
    if (open && unseenMessages > 0) {
      setUnseenMessages(0);
    }
  }, [open]);

  const handleButtonClick = () => {
    if (open) {
      setIsClosing(true);
      setTimeout(() => {
        setOpen(false);
        setIsClosing(false);
      }, 100);
    } else {
      setOpen(true);
    }
  };

  // const handleSendImage = async (url: string) => {
  //   const tempId = new Date().toISOString();
  //   setMessages([
  //     ...messages,
  //     {
  //       id: tempId,
  //       photoUrl: url,
  //       sender: {
  //         name: user?.name || "User",
  //         role: "user",
  //       },
  //     },
  //   ]);

  //   const response = await fetch(
  //     `${import.meta.env.VITE_REST_API_URL}/api/v1/webchat/message`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //       },
  //       body: JSON.stringify({
  //         image: url,
  //         name: user?.name,
  //         email: user?.email,
  //         phone: user?.phone,
  //         organisationId: organisationId,
  //       }),
  //     }
  //   );

  //   if (response.status === 200) {
  //     const data = await response.json();
  //     setMessages((prevMessages) =>
  //       prevMessages.map((msg) =>
  //         msg.id === tempId
  //           ? {
  //               ...msg,
  //               id: data.id,
  //               message: data.message,
  //             }
  //           : msg
  //       )
  //     );
  //   } else {
  //     setMessages((prevMessages) =>
  //       prevMessages.filter((msg) => msg.id !== tempId)
  //     );
  //     alert("Error sending message");
  //   }
  // };

  const handleSendImage = async (url: string) => {
    const tempId = new Date().toISOString();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: tempId,
        url,
        sender: {
          name: user?.name || "User",
          role: "user",
        },
      },
    ]);

<<<<<<< HEAD
    // try {
    //   const { data, errors } = await sendEmbedWebchatMessage({
    //     variables: {
    //       url,
    //       contactId: user?.contactId,
    //     },
    //   });

    //   if (errors) {
    //     console.error("GraphQL errors:", errors);
    //     throw new Error("Error sending message via GraphQL.");
    //   }

    //   if (data?.sendEmbedWebchatMessage) {
    //     console.log("Message sent");
    //   } else {
    //     throw new Error("No data received from GraphQL mutation.");
    //   }
    // } catch (error) {
    //   console.error("Error sending message:", error);
    //   setMessages((prevMessages) =>
    //     prevMessages.filter((msg) => msg.id !== tempId)
    //   );
    //   alert("Error sending message. Please try again.");
    // }
=======
    try {
      const { data, errors } = await sendEmbedWebchatMessage({
        variables: {
          url,
          contactId: user?.contactId,
        },
      });

      if (errors) {
        console.error("GraphQL errors:", errors);
        throw new Error("Error sending message via GraphQL.");
      }

      if (data?.sendEmbedWebchatMessage) {
        console.log("Message sent");
      } else {
        throw new Error("No data received from GraphQL mutation.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== tempId)
      );
      alert("Error sending message. Please try again.");
    }
>>>>>>> c29d3eb466dfd2fd2173ff969f5deb75cdaeacad
  };

  const handleSendMessage = async (message: string) => {
    const tempId = new Date().toISOString();
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        id: tempId,
        message,
        sender: {
          name: user?.name || "User",
          role: "user",
        },
      },
    ]);

    try {
      const { data, errors } = await sendEmbedWebchatMessage({
        variables: {
          message,
          contactId: user?.contactId,
        },
      });

      if (errors) {
        console.error("GraphQL errors:", errors);
        throw new Error("Error sending message via GraphQL.");
      }

      if (data?.sendEmbedWebchatMessage) {
        console.log("Message sent");
      } else {
        throw new Error("No data received from GraphQL mutation.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prevMessages) =>
        prevMessages.filter((msg) => msg.id !== tempId)
      );
      alert("Error sending message. Please try again.");
    }
  };

  const { data, loading, error } = useSubscription(MESSAGE_SUBSCRIPTION, {
    variables: { contactId: user?.contactId },
  });
  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    if (data && !loading) {
      setMessages((prevMessages) => [...prevMessages, data.newWebchatMessage]);

      if (!open) {
        const audio = new Audio(notification);
        setUnseenMessages((prev) => prev + 1);
        audio.play();
      }
    }

    if (error) {
      console.error("Error subscribing to messages:", error);
    }
  }, [data]);
  return (
    <div id="webchat-container" className="h-full w-full">
      <div>
        <button
          style={{
            backgroundColor: color ? `#${color}` : "#3b82f6",
            color: getTextColorBasedOnBackground(`#${color}`),
          }}
          className={`fixed bottom-2 sm:bottom-4 justify-center flex items-center sm:right-4 right-2 w-14 h-14 rounded-full z-50 text-white font-semibold text-lg shadow-lg`}
          onClick={handleButtonClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`transition-transform duration-300 ${
              open ? "scale-50" : "scale-0"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M3.22 3.22a.75.75 0 0 1 1.06 0l3.97 3.97V4.5a.75.75 0 0 1 1.5 0V9a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1 0-1.5h2.69L3.22 4.28a.75.75 0 0 1 0-1.06Zm17.56 0a.75.75 0 0 1 0 1.06l-3.97 3.97h2.69a.75.75 0 0 1 0 1.5H15a.75.75 0 0 1-.75-.75V4.5a.75.75 0 0 1 1.5 0v2.69l3.97-3.97a.75.75 0 0 1 1.06 0ZM3.75 15a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-2.69l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97H4.5a.75.75 0 0 1-.75-.75Zm10.5 0a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-2.69l3.97 3.97a.75.75 0 1 1-1.06 1.06l-3.97-3.97v2.69a.75.75 0 0 1-1.5 0V15Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`transition-transform duration-300 absolute ${
              open ? "scale-0" : "scale-50"
            }`}
          >
            <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
            <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
          </svg>

          {unseenMessages > 0 && (
            <div className="absolute top-0 left-0 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {unseenMessages}
            </div>
          )}
        </button>

        {(open || isClosing) && (
          <div
            className={`fixed z-50 bottom-[72px] sm:right-[72px] left-[2%] sm:left-auto flex flex-col justify-center w-[96%] items-center sm:w-80 h-[30rem] bg-gray-100 rounded-xl shadow-lg p-4 border webchat-container ${
              isClosing ? "fade-out" : "fade-in"
            }`}
          >
            <Webchat
              theme={color ? `#${color}` : "#3b82f6"}
              messages={messages}
              user={user}
              setUser={setUser}
              handleSendWelcomeMessage={handleSendWelcomeMessage}
              handleSendImage={handleSendImage}
              handleSendMessage={handleSendMessage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
