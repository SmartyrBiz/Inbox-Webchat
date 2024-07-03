import { gql } from "@apollo/client";

export const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSubscription($contactId: ID!) {
    newWebchatMessage(contactId: $contactId) {
      id
      message
      contactId
      sender {
        name
        role
      }
    }
  }
`;
