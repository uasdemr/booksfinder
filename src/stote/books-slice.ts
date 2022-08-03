import { fetchBooksAction } from './api-action'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  books: [],
  isLoading: false,
  currentPage: 0
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchBooksAction.fulfilled, (state, action) => {
        state.isLoading = false
        console.log(action);

      })
  }
})

export const {
  setCurrentPage
} = booksSlice.actions

export default booksSlice.reducer
