import { useMutation } from "@apollo/client";
import React, { useState, useEffect } from "react";
import { CONNECT_TO_CHAT } from "../graphql/CONNECT_TO_CHAT";

interface UserInfoProps {
  theme: string;
  setUser: (name: string, contactId: string) => void;
}

const UserInfo: React.FC<UserInfoProps> = ({ theme, setUser }) => {
  const [connectToChat, { data, loading, error }] =
    useMutation(CONNECT_TO_CHAT);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [formError, setFormError] = useState("");

  const handleSetUser = async () => {
    setFormError("");
    if (!name.trim() || !email.trim()) {
      setFormError("Name and email are required.");
      return;
    }

    try {
      await connectToChat({
        variables: {
          name,
          email,
          phone,
          organisationId: "1db2e22a-746e-4324-98df-572c5996e5da",
        },
      });
    } catch (err) {
      console.error("Error connecting to chat:", err);
    }
  };

  useEffect(() => {
    if (error) {
      alert("Error connecting to chat: " + error.message);
    }
    if (data?.connectToChat) {
      setUser(name, data.connectToChat.id);
    }
  }, [data, error, name, setUser]);

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
        {formError && <p className="text-red-500">{formError}</p>}
        <button
          onClick={handleSetUser}
          style={{ backgroundColor: theme }}
          disabled={!name || !email || !phone || loading}
          className="w-full px-4 py-2 text-white rounded-lg font-semibold"
        >
          {loading ? "Connecting..." : "Start Chatting"}
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
