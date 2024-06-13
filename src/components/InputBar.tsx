import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "./EmojiPicker";
// import FilePicker from "./FilePicker";

interface InputBarProps {
  sendMessage: (message: string) => void;
  sendImage: (url: string) => void;
  sendingMessage: boolean;
}

const InputBar: React.FC<InputBarProps> = ({
  sendMessage,
  sendImage,
  sendingMessage,
}) => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState<{
    name: string;
    email: string;
    organisationId: string;
  } | null>(null);
  // const [filePickerOpen, setFilePickerOpen] = useState(false);
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [fileUploadingPercentage, setFileUploadingPercentage] = useState(0);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const handleEmojiClick = (emoji: string) => {
    // setFilePickerOpen(false);
    setInput((prev) => prev + emoji);
    setEmojiPickerOpen(false);
  };

  const fetchPresignedUrl = async (file: File) => {
    setFileUploadingPercentage(25);

    const response = await fetch(
      `http://localhost:4444/api/v1/s3/generate-presigned-url`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: file.name,
          fileType: file.type,
          email: user?.email,
          organisationId: user?.organisationId,
        }),
      }
    );

    setFileUploadingPercentage(75);

    if (!response.ok) {
      throw new Error("Failed to fetch presigned URL");
    }

    const data = await response.json();

    await fetch(data.url, {
      method: "PUT",
      body: file,
      headers: {
        "Content-Type": file.type,
        // "x-amz-acl": "public-read",
      },
    });

    setFileUploadingPercentage(100);

    // Log the uploaded file URL
    const fileUrl = data.url.split("?")[0];
    console.log("File uploaded successfully. URL:", fileUrl);

    setTimeout(() => {
      setFile(null);
      if (fileRef.current) {
        fileRef.current.value = "";
      }
      setFileUploadingPercentage(0);

      sendImage(fileUrl);
    }, 500);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "" || sendingMessage) {
      return;
    }

    sendMessage(input);
    setInput("");
  };

  useEffect(() => {
    if (!file) return;

    fetchPresignedUrl(file);
  }, [file]);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div className="flex flex-col w-full items-center justify-between gap-1">
      <div
        className={`transition-opacity duration-200 ${
          emojiPickerOpen
            ? "opacity-100"
            : "opacity-0 hidden pointer-events-none"
        }`}
      >
        <EmojiPicker onEmojiClick={handleEmojiClick} />
      </div>
      <div
        className={`w-full transition-opacity duration-200 ${
          file ? "opacity-100" : "opacity-0 hidden pointer-events-none"
        }`}
      >
        <div className="flex p-2 border rounded-xl shadow bg-white w-full">
          <div
            style={{ width: `${fileUploadingPercentage}%` }}
            className={`h-4 bg-blue-500 rounded-xl`}
          ></div>
        </div>
      </div>
      <form onSubmit={handleSend} className="flex w-full">
        <input
          type="text"
          className="flex-1 p-2 w-full border rounded-xl shadow !outline-none text-sm sm:text-base"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
        />
        <button
          type="submit"
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
      </form>
      <div className="flex w-full justify-between items-center">
        <div className="flex items-center gap-1">
          <form className="hidden" onSubmit={handleSend}>
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={async (e) => {
                e.target.files && setFile(e.target.files?.[0]);
              }}
            />
          </form>
          <button
            className="text-gray-500 hover:bg-gray-200 transition-colors p-2 rounded-lg aspect-square text-sm"
            onClick={() => fileRef.current?.click()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4"
            >
              <path
                fill-rule="evenodd"
                d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
          <button
            className={`${
              emojiPickerOpen ? "text-blue-500" : "text-gray-500"
            } hover:bg-gray-200 transition-colors p-2 rounded-lg aspect-square text-sm`}
            onClick={() => setEmojiPickerOpen((prev) => !prev)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
              />
            </svg>
          </button>
        </div>

        <a
          href="https://smartyr.biz"
          target="_blank"
          rel="noreferrer"
          className="text-xs text-gray-500 hover:text-gray-600 transition-colors"
        >
          Powered by Smartyr
        </a>
      </div>
    </div>
  );
};

export default InputBar;
