import { FetchBookPropsType, FetchBooksPropsType, GetBooksType, OneBook } from "../types/book";
import store, { api } from "./store";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setIsLoadingFalse } from "./books-slice";
import { ErrorType } from "../types/error";
import { errorHandle } from "../services/error-handle";
import { makeQueryString } from "../util";

export const initialSearch = createAsyncThunk(
  'app/fetchBooks',
  async ({ q, category, orderBy, startIndex, maxResults, apiKey }: FetchBooksPropsType) => {
    const queryString = makeQueryString({ q, category, orderBy, startIndex, maxResults, apiKey })
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

