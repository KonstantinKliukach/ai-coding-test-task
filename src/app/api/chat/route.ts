import { ChatPostRequestPayload } from '@/store/services/chatApi';
import { Apis } from '@/store/slices/apiSelectSlice';
import { ChatMessageContent } from '@/types';
import { API_HOST, API_SESSION, API_TOKEN } from '@/utils/constants';
import axios, { AxiosError } from 'axios';

type ResponseData = ChatMessageContent[];

interface TextModelPayload {
  session_id: string;
  token: string;
  user_input: string;
}

interface GraphicModelPayload {
  n: number;
  prompt: string;
  resolution: string;
  token: string;
}

export async function POST(request: Request) {
  const { api, content }: ChatPostRequestPayload = await request.json();

  let payload: Partial<TextModelPayload> | Partial<GraphicModelPayload> = {};

  if (api !== Apis.DALLE.path) {
    payload = {
      session_id: API_SESSION,
      token: API_TOKEN,
      user_input: content,
    };
  } else {
    payload = { n: 0, prompt: content, resolution: '400', token: API_TOKEN };
  }

  const url = `${API_HOST}/${api}`;
  console.info(url, payload);
  try {
    const { data } = await axios.post<ResponseData>(url, payload);
    return Response.json(data);
  } catch (error) {
    const e = error as AxiosError;
    console.error(e.status, e.message);
    console.error(error);
    return new Response('Oops! Everything is very bad! If only I were a backend developer...', { status: 500 });
  }
}
