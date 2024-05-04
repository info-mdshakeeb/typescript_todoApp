import { configureStore } from '@reduxjs/toolkit'
import todoSlice from './features/todoSlice'
import logger from './middleware/logger'

export const store = configureStore({
  reducer: {
    todo: todoSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch