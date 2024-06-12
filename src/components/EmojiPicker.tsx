import React from "react";

interface EmojiPickerProps {
  onEmojiClick: (emoji: string) => void;
}

const EmojiPicker: React.FC<EmojiPickerProps> = ({ onEmojiClick }) => {
  const emojis = ["❤️", "😀", "☹️", "😎", "😡", "👍", "👎"];

  return (
    <div className="flex p-1 border rounded-xl shadow bg-white">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          className="p-1 rounded-xl hover:bg-gray-100"
          onClick={() => onEmojiClick(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default EmojiPicker;
