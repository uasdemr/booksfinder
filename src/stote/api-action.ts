import { createAsyncThunk } from "@reduxjs/toolkit";
import { Book } from "../types/book";
import { api } from "./store";


export const fetchBooks = createAsyncThunk(
  'app/fetchLittleData',
  // тут будут параметры запроса, введённые и выбранные пользователем на страничке
  async () => {
    try {
      // запилить строку запроса. Передавать в эту санку параметры запроса, которые выбрал пользователь
      const { data } = await api.get<Book>(`?q=собаки+subject:medical`);
      return data
    } catch (error) {
      // errorHandle(error)
      console.log(error);

    }
  },
);

