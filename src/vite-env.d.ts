/// <reference types="vite/client" />
interface WebChatConfig {
  organisationId: string;
  color: string;
}

interface Window {
  WebChatConfig: WebChatConfig;
}
