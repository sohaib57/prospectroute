import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { loadTasksForUser, saveTasksForUser } from '../../utils/storage'
import type { Task } from '../../utils/storage'

export type SortKey = 'az' | 'za' | 'new' | 'old'

interface TasksState {
	tasks: Task[]
	activeUserId: string | null
	search: string
	sort: SortKey
}

const initialState: TasksState = {
	tasks: [],
	activeUserId: null,
	search: '',
	sort: 'new',
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		loadForUser(state, action: PayloadAction<string>) {
			state.activeUserId = action.payload
			state.tasks = loadTasksForUser(action.payload)
		},
		addTask(state, action: PayloadAction<Omit<Task, 'id' | 'timestamp'>>) {
			if (!state.activeUserId) return
			const newTask: Task = {
				...action.payload,
				id: crypto.randomUUID(),
				timestamp: Date.now(),
				userId: state.activeUserId,
			}
			state.tasks.unshift(newTask)
			saveTasksForUser(state.activeUserId, state.tasks)
		},
		updateTask(
			state,
			action: PayloadAction<{
				id: string
				updates: Partial<Omit<Task, 'id' | 'userId' | 'timestamp'>>
			}>,
		) {
			if (!state.activeUserId) return
			const idx = state.tasks.findIndex((t) => t.id === action.payload.id)
			if (idx >= 0) {
				state.tasks[idx] = { ...state.tasks[idx], ...action.payload.updates }
				saveTasksForUser(state.activeUserId, state.tasks)
			}
		},
		deleteTask(state, action: PayloadAction<string>) {
			if (!state.activeUserId) return
			state.tasks = state.tasks.filter((t) => t.id !== action.payload)
			saveTasksForUser(state.activeUserId, state.tasks)
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload
		},
		setSort(state, action: PayloadAction<SortKey>) {
			state.sort = action.payload
		},
		clear(state) {
			state.tasks = []
			state.activeUserId = null
		},
	},
})

export const {
	loadForUser,
	addTask,
	updateTask,
	deleteTask,
	setSearch,
	setSort,
	clear,
} = tasksSlice.actions

export default tasksSlice.reducer


