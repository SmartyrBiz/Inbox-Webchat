import React from "react";

interface ImageMessageProps {
  photoUrl: string;
  sender: {
    name: string;
    role: string;
  };
  showName: boolean;
}

const ImageMessage: React.FC<ImageMessageProps> = ({
  photoUrl,
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
          className={`p-2 rounded-lg ${
            isUserMessage
              ? "bg-gray-200 rounded-tr-none self-end"
              : "bg-blue-500 text-white rounded-tl-none self-start"
          }`}
          style={{ maxWidth: "90%" }}
        >
          <a href={photoUrl} target="_blank" rel="noreferrer">
            <img
              src={photoUrl}
              className="w-full h-full rounded-lg"
              alt="Photo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ImageMessage;
