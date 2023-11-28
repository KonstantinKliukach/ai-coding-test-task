import { ChatMessage } from '@/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Endpoints } from '@/utils/ednpoints';
import { Methods } from '@/utils/methods';

export interface ChatPostRequestPayload {
  content: string;
  api: string;
}

export const chatApi = createApi({
  reducerPath: 'chatApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/' }),
  tagTypes: ['CHAT'],
  endpoints: (builder) => ({
    getChatBySession: builder.query<ChatMessage[], void>({
      query: () => `${Endpoints.Session}`,
      providesTags: ['CHAT'],
    }),
    askToChat: builder.mutation<ChatMessage[], ChatPostRequestPayload>({
      query: (body) => ({
        url: Endpoints.Chat,
        method: Methods.POST,
        body,
      }),
      invalidatesTags: ['CHAT'],
    }),
  }),
});

export const { useGetChatBySessionQuery, useAskToChatMutation } = chatApi;
