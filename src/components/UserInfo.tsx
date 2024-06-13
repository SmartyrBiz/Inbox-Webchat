// src/components/UserInfo.tsx
import React, { useState } from "react";

interface UserInfoProps {
  theme: string;
  setUser: (
    name: string,
    email: string,
    phone: string,
    organisationId: string
  ) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ theme, setUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSetUser = () => {
    if (name.trim() !== "" && email.trim() !== "") {
      setUser(name, email, phone, "1db2e22a-746e-4324-98df-572c5996e5da");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="p-4 bg-white rounded-lg shadow">
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded-lg"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full p-2 mb-2 border rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full p-2 mb-2 border rounded-lg"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <button
          onClick={handleSetUser}
          style={{ backgroundColor: theme }}
          className="w-full px-4 py-2 text-white  rounded-lg font-semibold"
        >
          Start Chatting
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
