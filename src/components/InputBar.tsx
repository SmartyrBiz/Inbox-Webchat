import React, { useState } from "react";

interface InputBarProps {
  sendMessage: (message: string) => void;
  sendingMessage: boolean;
}

const InputBar: React.FC<InputBarProps> = ({ sendMessage, sendingMessage }) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="flex w-full">
      <input
        type="text"
        className="flex-1 p-2 border rounded-xl shadow"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <button
        onClick={handleSend}
        disabled={input.trim() === "" || sendingMessage}
        className="ml-2 px-3 text-white bg-blue-500 disabled:bg-blue-600 rounded-xl shadow aspect-square transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-4"
        >
          <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
        </svg>
      </button>
    </div>
  );
};

export default InputBar;
