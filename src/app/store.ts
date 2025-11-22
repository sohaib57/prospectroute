import { configureStore } from '@reduxjs/toolkit'
import { usersApi } from '../features/users/usersApi'
import tasksReducer, { tasksSlice } from '../features/tasks/tasksSlice'

export const store = configureStore({
	reducer: {
		[tasksSlice.name]: tasksReducer,
		[usersApi.reducerPath]: usersApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(usersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


