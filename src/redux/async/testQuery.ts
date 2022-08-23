import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const testApi = createApi({
  reducerPath: 'testApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://whatever.com' }),
  endpoints: (builder) => ({
    getByName: builder.query<any, string>({
      query: (name) => `api/${name}`,
    }),
  }),
})

export const { useGetByNameQuery } = testApi
