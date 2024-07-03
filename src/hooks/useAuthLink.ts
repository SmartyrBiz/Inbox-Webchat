import { useState, useEffect } from "react";
import { ApolloLink } from "@apollo/client";

export const useAuthLink = () => {
  const [authLink, setAuthLink] = useState(createAuthLink());

  useEffect(() => {
    const handleUserChange = () => {
      setAuthLink(createAuthLink());
    };

    window.addEventListener("storage", handleUserChange);

    return () => {
      window.removeEventListener("storage", handleUserChange);
    };
  }, []);

  return authLink;
};

const createAuthLink = () => {
  return new ApolloLink((operation, forward) => {
    const user = localStorage.getItem("user");

    if (user) {
      operation.setContext({
        headers: {
          "ws-auth": user,
        },
      });
    }

    return forward(operation);
  });
};
