import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useGetUserByIdQuery } from '../features/users/usersApi'
import { Navbar } from '../components/Navbar'
import { Button } from '../components/Button'
import { ProtectedRoute } from '../routes/ProtectedRoute'

export default function UserDetailsPage() {
	const { id } = useParams()
	const { t } = useTranslation()
	const userId = Number(id)
	const { data, isFetching, isError } = useGetUserByIdQuery(userId)

	return (
		<ProtectedRoute>
			<div className="min-h-screen bg-white">
				<Navbar />
				<div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
					<Link to="/users">
						<Button variant="secondary">{t('users.back')}</Button>
					</Link>
					<div className="mt-6 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
						<h1 className="mb-4 text-2xl font-bold">{t('users.details')}</h1>
						{isFetching && <p>{t('common.loading')}</p>}
						{isError && <p className="text-red-600">Failed to load user.</p>}
						{data && (
							<div className="space-y-2">
								<p>
									<strong>{t('users.name')}:</strong> {data.firstName} {data.lastName}
								</p>
								<p>
									<strong>{t('users.email')}:</strong> {data.email}
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</ProtectedRoute>
	)
}


