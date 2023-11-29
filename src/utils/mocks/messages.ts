import { ChatMessage } from '@/types';

const chatMock: ChatMessage[] = [
  {
    _id: '0',
    content: 'Hello! How can I help you today?',
    role: 'system',
  },
  {
    _id: '2',
    content: "Hi! I'm having an issue with git. How do I git revert?",
    role: 'user',
  },
  {
    _id: '3',
    content: 'To undo the last commit in git, you can use the git revert command.',
    role: 'assistant',
  },
  {
    _id: '4',
    content: 'How can I revert to a specific commit?',
    role: 'user',
  },
  {
    _id: '5',
    content: 'You can specify the commit hash in the git revert command, for example, git revert abc123.',
    role: 'assistant',
  },
  {
    _id: '6',
    content: 'Thank you! If I have additional questions, can I ask you?',
    role: 'user',
  },
  {
    _id: '7',
    content: "Certainly! I'm here to help with any questions about git or anything else.",
    role: 'assistant',
  },
];

export default chatMock;
