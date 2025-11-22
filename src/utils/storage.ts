export type TaskStatus = 'pending' | 'completed'

export interface Task {
	id: string
	title: string
	description: string
	status: TaskStatus
	timestamp: number
	userId: string
}

const keyForUser = (userId: string) => `pr_tasks_${userId}`

export function loadTasksForUser(userId: string): Task[] {
	try {
		const raw = localStorage.getItem(keyForUser(userId))
		return raw ? (JSON.parse(raw) as Task[]) : []
	} catch {
		return []
	}
}

export function saveTasksForUser(userId: string, tasks: Task[]) {
	try {
		localStorage.setItem(keyForUser(userId), JSON.stringify(tasks))
	} catch {
		// no-op
	}
}


