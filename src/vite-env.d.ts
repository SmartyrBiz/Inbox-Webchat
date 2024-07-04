/// <reference types="vite/client" />
interface WebChatConfig {
  organisationId: string;
  color: string;
  timezone: string;
  openAt: string;
  closedAt: string;
  openedDays: string[];
}

interface Window {
  WebChatConfig: WebChatConfig;
}
