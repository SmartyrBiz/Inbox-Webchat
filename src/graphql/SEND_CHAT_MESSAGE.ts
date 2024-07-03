import { gql } from "@apollo/client";

export const SEND_CHAT_MESSAGE = gql`
  mutation SendEmbedWebchatMessage($message: String!, $contactId: ID!) {
    sendEmbedWebchatMessage(message: $message, contactId: $contactId) {
      id
    }
  }
`;
