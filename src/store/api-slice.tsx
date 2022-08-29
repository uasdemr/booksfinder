import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Book } from '../types/book'

type FetchBooksPropsType = {
  q: string,
  category: string,
  orderBy: string,
  startIndex: string,
  maxResults: string,
}

interface ListResponse<T> {
  kind: string,
  totalItems: number
  items: T[]
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/volumes' }),
  tagTypes: ['Books'],
  endpoints: builder => ({
    getBooks: builder.query<ListResponse<Book>, FetchBooksPropsType | void>({
      query: ({ q, category, orderBy, startIndex, maxResults }: FetchBooksPropsType) => {
        let queryString = `/?q=${q}`

        category !== 'all' ? queryString += `+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}`
          : queryString += `&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}`

        return queryString
      },
    })
  })
})

export const { useGetBooksQuery } = apiSlice
