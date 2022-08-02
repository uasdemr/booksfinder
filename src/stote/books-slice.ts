import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchBooks } from './api-action'

const initialState = {}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      // state.currentPage = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {

      })
      .addCase(fetchBooks.fulfilled, (state, action) => {

      })
  }
})

export const {

} = booksSlice.actions
export default booksSlice.reducer
