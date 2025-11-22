import { useEffect } from 'react'
import type { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner'
import { useAuth } from '../context/AuthContext'

export function ProtectedRoute({ children }: { children: ReactNode }) {
	const { loading, user } = useAuth()

	useEffect(() => {}, [])

	if (loading) {
		return (
			<div className="flex h-[60vh] items-center justify-center">
				<Spinner className="h-10 w-10" />
			</div>
		)
	}

	if (!user) {
		return <Navigate to="/login" replace />
	}

	return <>{children}</>
}


