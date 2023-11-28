import { ChatMessageContent } from '@/types';
import { API_HOST, API_SESSION } from '@/utils/constants';
import axios from 'axios';

type ResponseData = ChatMessageContent[];

export async function GET() {
  try {
    const { data } = await axios.get<ResponseData>(`${API_HOST}/translate/${API_SESSION}`);
    return Response.json(data);
  } catch (error) {
    return new Response('Oops! Everything is very bad! If only I were a backend developer...', { status: 500 });
  }
}
