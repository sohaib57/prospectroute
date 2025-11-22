import { Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UsersPage from './pages/UsersPage'
import UserDetailsPage from './pages/UserDetailsPage'
import TasksPage from './pages/TasksPage'

export default function App() {
	return (
		<div className="min-h-screen">
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/users" element={<UsersPage />} />
				<Route path="/users/:id" element={<UserDetailsPage />} />
				<Route path="/tasks" element={<TasksPage />} />
				<Route path="*" element={<Navigate to="/" replace />} />
			</Routes>
		</div>
	)
}
