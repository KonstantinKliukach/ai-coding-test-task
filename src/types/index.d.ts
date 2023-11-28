export interface ChatMessageContent {
  content: string;
  role: 'user' | 'system' | 'assistant';
}

export interface ChatMessage extends ChatMessageContent {
  _id: string;
}
