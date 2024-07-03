import { gql } from "@apollo/client";

export const CONNECT_TO_CHAT = gql`
  mutation ConnectToChat(
    $name: String!
    $email: String!
    $phone: String!
    $organisationId: String!
  ) {
    connectToChat(
      name: $name
      email: $email
      phone: $phone
      organisationId: $organisationId
    ) {
      id
    }
  }
`;
