import { gql } from "@apollo/client";

export const GENERATE_PRESIGNED_URL = gql`
  mutation GeneratePresignedUrl($fileName: String!, $fileType: String!) {
    generatePresignedUrl(fileName: $fileName, fileType: $fileType) {
      url
    }
  }
`;
