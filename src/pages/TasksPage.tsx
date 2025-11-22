import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Modal } from '../components/Modal'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import {
	addTask,
	deleteTask,
	loadForUser,
	setSearch,
	setSort,
	updateTask,
} from '../features/tasks/tasksSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase'
import toast from 'react-hot-toast'
import { ProtectedRoute } from '../routes/ProtectedRoute'

type TaskForm = {
	title: string
	description: string
	status: 'pending' | 'completed'
}

const schema = yup.object({
	title: yup.string().required().min(2),
	description: yup.string().required().min(2),
	status: yup.mixed<'pending' | 'completed'>().oneOf(['pending', 'completed']).required(),
})

export default function TasksPage() {
	const { t } = useTranslation()
	const dispatch = useDispatch()
	const { tasks, search, sort } = useSelector((s: RootState) => s.tasks)
	const [editingId, setEditingId] = useState<string | null>(null)
	const [modalOpen, setModalOpen] = useState(false)

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, (u) => {
			if (u?.uid) dispatch(loadForUser(u.uid))
		})
		return () => unsub()
	}, [dispatch])

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<TaskForm>({
		resolver: yupResolver(schema),
		defaultValues: { title: '', description: '', status: 'pending' },
	})

	const filtered = useMemo(() => {
		const q = search.toLowerCase()
		const base = tasks.filter((t) => t.title.toLowerCase().includes(q))
		switch (sort) {
			case 'az':
				return base.sort((a, b) => a.title.localeCompare(b.title))
			case 'za':
				return base.sort((a, b) => b.title.localeCompare(a.title))
			case 'old':
				return base.sort((a, b) => a.timestamp - b.timestamp)
			default:
				return base.sort((a, b) => b.timestamp - a.timestamp)
		}
	}, [tasks, search, sort])

	function openCreate() {
		setEditingId(null)
		reset({ title: '', description: '', status: 'pending' })
		setModalOpen(true)
	}

	function openEdit(id: string) {
		const task = tasks.find((t) => t.id === id)
		if (!task) return
		setEditingId(id)
		reset({ title: task.title, description: task.description, status: task.status })
		setModalOpen(true)
	}

	async function onSubmit(values: TaskForm) {
		if (editingId) {
			dispatch(updateTask({ id: editingId, updates: values }))
			toast.success('Task updated')
		} else {
			dispatch(addTask({ ...values, userId: '' }))
			toast.success('Task created')
		}
		setModalOpen(false)
	}

	return (
		<ProtectedRoute>
			<div className="min-h-screen bg-white">
				<Navbar />
				<div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
						<h1 className="text-2xl font-bold">{t('tasks.title')}</h1>
						<div className="flex items-center gap-2">
							<Input
								placeholder={t('common.search')}
								value={search}
								onChange={(e) => dispatch(setSearch(e.target.value))}
							/>
							<select
								value={sort}
								onChange={(e) => dispatch(setSort(e.target.value as any))}
								className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
							>
								<option value="az">{t('common.az')}</option>
								<option value="za">{t('common.za')}</option>
								<option value="new">{t('common.newest')}</option>
								<option value="old">{t('common.oldest')}</option>
							</select>
							<Button onClick={openCreate}>{t('tasks.add')}</Button>
						</div>
					</div>

					{filtered.length === 0 ? (
						<p className="rounded-md border border-slate-200 p-6 text-center text-sm">
							{t('tasks.noTasks')}
						</p>
					) : (
						<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{filtered.map((task) => (
								<li key={task.id} className="rounded-md border border-slate-200 p-4">
									<div className="flex items-start justify-between">
										<div>
											<h3 className="font-semibold">{task.title}</h3>
											<p className="text-sm text-slate-600">{task.description}</p>
											<p className="mt-2 text-xs uppercase tracking-wide text-slate-500">
												{t('tasks.status')}: {t(`tasks.${task.status}`)}
											</p>
										</div>
										<div className="ms-2 flex gap-2">
											<Button variant="secondary" size="sm" onClick={() => openEdit(task.id)}>
												{t('tasks.edit')}
											</Button>
											<Button
												variant="secondary"
												size="sm"
												onClick={() => {
													if (confirm(t('tasks.confirmDelete') as string)) {
														dispatch(deleteTask(task.id))
														toast.success('Task deleted')
													}
												}}
											>
												{t('tasks.delete')}
											</Button>
										</div>
									</div>
									<p className="mt-2 text-xs text-slate-500">
										{new Date(task.timestamp).toLocaleString()}
									</p>
								</li>
							))}
						</ul>
					)}
				</div>

				<Modal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					title={editingId ? t('tasks.edit') : t('tasks.add')}
					actions={
						<>
							<Button variant="secondary" onClick={() => setModalOpen(false)}>
								{t('tasks.cancel')}
							</Button>
							<Button onClick={handleSubmit(onSubmit)} disabled={isSubmitting}>
								{t('tasks.save')}
							</Button>
						</>
					}
				>
					<form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
						<Input label={t('tasks.titleLabel')} {...register('title')} error={errors.title?.message} />
						<Input
							label={t('tasks.descLabel')}
							{...register('description')}
							error={errors.description?.message}
						/>
						<label className="block text-sm">
							<span className="mb-1 block font-medium text-pr-navy">{t('tasks.status')}</span>
							<select
								{...register('status')}
								className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-pr-navy shadow-sm focus:border-pr-navy focus:outline-none focus:ring-2 focus:ring-pr-yellow"
							>
								<option value="pending">{t('tasks.pending')}</option>
								<option value="completed">{t('tasks.completed')}</option>
							</select>
						</label>
					</form>
				</Modal>
			</div>
		</ProtectedRoute>
	)
}


