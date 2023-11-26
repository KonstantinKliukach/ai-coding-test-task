const chatMock: ChatMessage[] = [
  {
    _id: '1',
    text: 'Hello! How can I help you today?',
    creator: 'bot',
  },
  {
    _id: '2',
    text: "Hi! I'm having an issue with git. How do I git revert?",
    creator: 'user',
  },
  {
    _id: '3',
    text: 'To undo the last commit in git, you can use the git revert command.',
    creator: 'bot',
  },
  {
    _id: '4',
    text: 'How can I revert to a specific commit?',
    creator: 'user',
  },
  {
    _id: '5',
    text: 'You can specify the commit hash in the git revert command, for example, git revert abc123.',
    creator: 'bot',
  },
  {
    _id: '6',
    text: 'Thank you! If I have additional questions, can I ask you?',
    creator: 'user',
  },
  {
    _id: '7',
    text: "Certainly! I'm here to help with any questions about git or anything else.",
    creator: 'bot',
  },
];

export default chatMock;
