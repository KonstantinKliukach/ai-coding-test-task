import { ChatMessage } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Endpoints } from '@/utils/ednpoints';

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  endpoints: (builder) => ({
    getChatBySession: builder.query<ChatMessage[], void>({
      query: () => `${Endpoints.Session}`,
    }),
  }),
});

export const { useGetChatBySessionQuery } = chatApi;
