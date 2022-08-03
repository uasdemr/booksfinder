import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import booksReducer from './books-slice'

export const api = createAPI();

// const reducer = combineReducers({
//   ['DATA']: booksReducer,
// })

export const store = configureStore(
  {
    reducer: {
      books: booksReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: api,
        }
      })
  }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
