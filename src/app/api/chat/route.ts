import { ChatPostRequestPayload } from '@/store/services/chatApi';
import { ChatMessageContent } from '@/types';
import { API_HOST, API_SESSION, API_TOKEN } from '@/utils/constants';
import axios from 'axios';

type ResponseData = ChatMessageContent[];

export async function POST(request: Request) {
  const { api, content }: ChatPostRequestPayload = await request.json();
  try {
    const { data } = await axios.post<ResponseData>(`${API_HOST}/${api}`, {
      session_id: API_SESSION,
      token: API_TOKEN,
      user_input: content,
    });
    return Response.json(data);
  } catch (error) {
    return new Response('Oops! Everything is very bad! If only I were a backend developer...', { status: 500 });
  }
}
