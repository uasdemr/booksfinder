import { Book, OneBook } from "../types/book";
import store, { api } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoadingFalse } from "./books-slice";
import { ErrorType } from "../types/error";
import { errorHandle } from "../services/error-handle";

type FetchBooksPropsType = {
  q: string,
  category: string,
  orderBy: string,
  startIndex: string,
  maxResults: string,
}

type FetchBookPropsType = {
  id: string
}

type GetBooksType = {
  items: Book[],
  kind: string,
  totalItems: number,
}


const makeQueryString = ({ q, category, orderBy, startIndex, maxResults }: FetchBooksPropsType): string => {
  let queryString = `/?q=${q.trim()}`

  category !== 'all' ? queryString += `+subject:${category}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}`
    : queryString += `&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}`

  return queryString
}

export const initialSearch = createAsyncThunk(
  'app/fetchBooks',
  async ({ q, category, orderBy, startIndex, maxResults }: FetchBooksPropsType) => {
    const queryString = makeQueryString({ q, category, orderBy, startIndex, maxResults })
    try {
      const { data } = await api.get<GetBooksType>(queryString);
      return { data }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
      store.dispatch(setIsLoadingFalse())
    }
  },
);

export const showMore = createAsyncThunk(
  'app/showMore',
  async ({ q, category, orderBy, startIndex, maxResults }: FetchBooksPropsType) => {
    const queryString = makeQueryString({ q, category, orderBy, startIndex, maxResults })
    try {
      const { data } = await api.get<GetBooksType>(queryString);
      return { data }
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
      store.dispatch(setIsLoadingFalse())
    }
  },
);

export const fetchBookAction = createAsyncThunk(
  'app/fetchBook',
  async ({ id }: FetchBookPropsType) => {
    try {
      const { data } = await api.get<OneBook>(`/${id}`);
      return data
    } catch (error) {
      const err = error as ErrorType;
      errorHandle(err)
    }
  },
);

