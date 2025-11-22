import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface User {
	id: number
	firstName: string
	lastName: string
	email: string
	image?: string
}

export interface UsersListResponse {
	users: User[]
	total: number
	skip: number
	limit: number
}

export const usersApi = createApi({
	reducerPath: 'usersApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://dummyjson.com',
	}),
	endpoints: (builder) => ({
		getUsers: builder.query<
			UsersListResponse,
			{ page?: number; limit?: number; q?: string }
		>({
			// dummyjson supports limit and skip; map page to skip
			query: ({ page = 1, limit = 10, q }) => {
				const skip = (page - 1) * limit
				const search = q ? `&q=${encodeURIComponent(q)}` : ''
				return `/users?limit=${limit}&skip=${skip}${search}`
			},
		}),
		getUserById: builder.query<User, number>({
			query: (id) => `/users/${id}`,
		}),
	}),
})

export const { useGetUsersQuery, useGetUserByIdQuery } = usersApi


