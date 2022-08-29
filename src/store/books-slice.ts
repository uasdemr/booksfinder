import { fetchBookAction, initialSearch, showMore } from './api-action'
import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '../types/book'
import { defaulCard2 } from '../const'
import { uniqBy } from 'lodash'

const initialState: AppState = {
  books: [],
  totalItems: 0,
  userFind: '',
  orderBy: 'relevance',
  category: 'all',
  isLoading: false,
  startIndex: 0,
  maxResults: 30,
  openBook: defaulCard2,
  scrollY: 0,
  innerWindow: 0,
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setIsLoadingFalse(state) {
      state.isLoading = false
    },
    setScrollY(state, action) {
      state.scrollY = action.payload
    },
    setInnerWindow(state, action) {
      state.innerWindow = action.payload
    },
    setUserFind(state, action) {
      state.userFind = action.payload
    },
    setCategory(state, action) {
      state.category = action.payload
    },
    setOrderBy(state, action) {
      state.orderBy = action.payload
    },
    setStartIndex(state, action) {
      debugger
      state.startIndex = action.payload
    },
    setMaxResult(state, action) {
      state.maxResults = action.payload
    },
    clearStore(state) {
      state.books = initialState.books
      state.totalItems = initialState.totalItems
      state.userFind = initialState.userFind
      state.isLoading = initialState.isLoading
      state.startIndex = initialState.startIndex
      state.maxResults = initialState.maxResults
      state.openBook = initialState.openBook
      state.scrollY = initialState.scrollY
      state.orderBy = initialState.orderBy
      state.category = initialState.category
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initialSearch.pending, (state) => {
        state.isLoading = true
      })
      .addCase(initialSearch.fulfilled, (state, action) => {
        if (action.payload) {
          const { data } = action.payload
          state.books = []
          state.books = uniqBy(data.items, 'id')
          state.totalItems = data.totalItems
          state.isLoading = false
        }
      })
      .addCase(showMore.pending, (state) => {
        state.isLoading = true
      })
      .addCase(showMore.fulfilled, (state, action) => {
        if (action.payload) {
          state.startIndex += state.maxResults
          const { data } = action.payload
          state.books = uniqBy([...state.books, ...data.items], 'id')
          state.isLoading = false
        }
      })
      .addCase(fetchBookAction.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchBookAction.fulfilled, (state, action) => {
        if (action.payload) {
          state.openBook = action.payload
          state.isLoading = false
        }
      })
  }
})

export const {
  setUserFind,
  setScrollY,
  clearStore,
  setStartIndex,
  setOrderBy,
  setCategory,
  setIsLoadingFalse,
  setInnerWindow,
} = booksSlice.actions

export default booksSlice.reducer
