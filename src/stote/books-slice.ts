import { fetchBooksAction } from './api-action'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppState } from '../types/book'

const initialState: AppState = {
  books: [],
  isLoading: false,
  startIndex: 0,
  maxResults: 30,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setStartIndex(state) {
      state.startIndex += 30
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchBooksAction.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action.payload);

      })
  }
})

export const {
  setStartIndex
} = booksSlice.actions

export default booksSlice.reducer
