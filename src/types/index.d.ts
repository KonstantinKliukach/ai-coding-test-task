interface ChatMessage {
  _id: string;
  text: string;
  creator: 'bot' | 'user';
}
