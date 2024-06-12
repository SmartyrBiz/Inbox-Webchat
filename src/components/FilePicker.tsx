import React from "react";

interface FilePickerProps {
  onFileSelect: (emoji: string) => void;
}

const FilePicker: React.FC<FilePickerProps> = ({ onFileSelect }) => {
  const emojis = ["❤️", "😀", "☹️", "😎", "😡", "👍", "👎"];

  return (
    <div className="flex p-1 border rounded-xl shadow bg-white">
      {emojis.map((emoji) => (
        <button
          key={emoji}
          className="p-1 rounded-xl hover:bg-gray-100"
          onClick={() => onFileSelect(emoji)}
        >
          {emoji}
        </button>
      ))}
    </div>
  );
};

export default FilePicker;
