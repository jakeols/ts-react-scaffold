import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counterSlice'
import { testApi } from './async/testQuery'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    [testApi.reducerPath]: testApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(testApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
