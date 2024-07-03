import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
  split,
  ApolloLink,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { useAuthLink } from "./hooks/useAuthLink";
import "./index.css";

const AppWithApollo = () => {
  const wsLink = new GraphQLWsLink(
    createClient({
      url: `${import.meta.env.VITE_WEBSOCKET_URL}/graphql`,
      retryAttempts: 10,
      on: {
        connected: () => {
          console.log("WebSocket connected");
        },
        closed: () => {
          console.log("WebSocket closed");
        },
        message: (message) => console.log("WebSocket message:", message),
        error: (error) => console.error("WebSocket error", error),
      },
    })
  );

  const httpLink = new HttpLink({
    uri: `${import.meta.env.VITE_REST_API_URL}/graphql`,
  });

  const authLink = useAuthLink();

  const splitLink = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === "OperationDefinition" &&
        definition.operation === "subscription"
      );
    },
    wsLink,
    ApolloLink.from([authLink, httpLink])
  );

  const client = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppWithApollo />
  </React.StrictMode>
);
