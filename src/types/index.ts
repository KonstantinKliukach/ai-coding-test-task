import { v4 as uuidv4 } from 'uuid';

export class ChatMessage {
  _id: string;
  text: string;
  creator: 'bot' | 'user';

  constructor(text: string, creator?: 'bot' | 'user') {
    this._id = uuidv4();
    this.creator = creator || 'user';
    this.text = text;
  }
}
