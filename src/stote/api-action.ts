import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../types/book";
import { api } from "./store";

type FetchBooksType = {
  q: string,
  category: string,
  sort: string
}

export const fetchBooksAction = createAsyncThunk(
  'app/fetchBooks',
  async ({q, category, sort}: FetchBooksType) => {
    try {
      const { data } = await api.get<Book>(`/?q=${q}+subject:${category}&orderBy=${sort}`);
      return data
    } catch (error) {
      // errorHandle(error)
      console.log(error);

    }
  },
);

