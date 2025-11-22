import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useGetUsersQuery } from '../features/users/usersApi'
import { Navbar } from '../components/Navbar'
import { Input } from '../components/Input'
import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import { ProtectedRoute } from '../routes/ProtectedRoute'
import toast from 'react-hot-toast'
import { Spinner } from '../components/Spinner'

export default function UsersPage() {
	const { t } = useTranslation()
	const [page, setPage] = useState(1)
	const [q, setQ] = useState('')
	const { data, isFetching, isError, refetch } = useGetUsersQuery({
		page,
		limit: 10,
		q: q || undefined,
	})
	const [sort, setSortState] = useState<'az' | 'za'>('az')
	const usersView = useMemo(() => {
		const list = data?.users ? [...data.users] : []
		const filtered = list.filter((u) => {
			const name = `${u.firstName} ${u.lastName}`.toLowerCase()
			return name.includes(q.toLowerCase()) || u.email.toLowerCase().includes(q.toLowerCase())
		})
		return filtered.sort((a, b) => {
			const an = `${a.firstName} ${a.lastName}`
			const bn = `${b.firstName} ${b.lastName}`
			return sort === 'az' ? an.localeCompare(bn) : bn.localeCompare(an)
		})
	}, [data, sort, q])
	useEffect(() => {
		if (isError) toast.error('Failed to load users')
	}, [isError])

	return (
		<ProtectedRoute>
			<div className="min-h-screen bg-white">
				<Navbar />
				<div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
						<h1 className="text-2xl font-bold">{t('users.title')}</h1>
						<div className="flex items-center gap-2">
							<Input
								placeholder={t('common.search')}
								value={q}
								onChange={(e) => {
									setQ(e.target.value)
									setPage(1)
								}}
							/>
							<select
								value={sort}
								onChange={(e) => setSortState(e.target.value as 'az' | 'za')}
								className="h-10 rounded-md border border-slate-300 bg-white px-3 text-sm"
							>
								<option value="az">{t('common.az')}</option>
								<option value="za">{t('common.za')}</option>
							</select>
							<Button variant="secondary" onClick={() => refetch()}>
								Refresh
							</Button>
						</div>
					</div>

					<div className="overflow-hidden rounded-md border border-slate-200">
						<table className="min-w-full divide-y divide-slate-200">
							<thead className="bg-slate-50">
								<tr>
									<th className="px-4 py-3 text-left text-sm font-semibold">
										{t('users.name')}
									</th>
									<th className="px-4 py-3 text-left text-sm font-semibold">
										{t('users.email')}
									</th>
									<th className="px-4 py-3" />
								</tr>
							</thead>
							<tbody className="divide-y divide-slate-100 bg-white">
								{usersView?.map((u) => (
									<tr key={u.id}>
										<td className="px-4 py-3">
											{u.firstName} {u.lastName}
										</td>
										<td className="px-4 py-3">{u.email}</td>
										<td className="px-4 py-3 text-right">
											<Link to={`/users/${u.id}`}>
												<Button size="sm" variant="secondary">
													{t('users.view')}
												</Button>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						</table>
						{isFetching && (
							<div className="flex items-center justify-center p-4">
								<Spinner className="h-6 w-6" />
							</div>
						)}
						{isError && (
							<div className="p-4 text-center text-sm text-red-600">
								Failed to load users
							</div>
						)}
					</div>

					<div className="mt-4 flex items-center justify-between">
						<Button
							variant="secondary"
							onClick={() => setPage((p) => Math.max(1, p - 1))}
							disabled={page === 1}
						>
							Prev
						</Button>
						<span className="text-sm">
							Page {page} / {Math.ceil((data?.total ?? 0) / (data?.limit ?? 10)) || 1}
						</span>
						<Button
							variant="secondary"
							onClick={() =>
								setPage((p) =>
									p < Math.ceil((data?.total ?? 0) / (data?.limit ?? 10)) ? p + 1 : p,
								)
							}
							disabled={
								page >= Math.ceil((data?.total ?? 0) / (data?.limit ?? 10)) ||
								(data?.total ?? 0) === 0
							}
						>
							Next
						</Button>
					</div>
				</div>
			</div>
		</ProtectedRoute>
	)
}


