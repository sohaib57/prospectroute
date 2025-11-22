import { createContext, useContext, useEffect, useState, PropsWithChildren } from 'react'
import { onAuthStateChanged, type User } from 'firebase/auth'
import { auth, initAuthPersistence } from '../firebase'

type AuthContextValue = {
	user: User | null
	loading: boolean
}

const AuthContext = createContext<AuthContextValue>({ user: null, loading: true })

export function AuthProvider({ children }: PropsWithChildren) {
	const [user, setUser] = useState<User | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let mounted = true
		async function bootstrap() {
			try {
				await initAuthPersistence()
			} finally {
				const unsub = onAuthStateChanged(auth, (u) => {
					if (!mounted) return
					setUser(u)
					setLoading(false)
				})
				return unsub
			}
		}
		let unsub: (() => void) | undefined
		bootstrap().then((u) => {
			unsub = u
		})
		return () => {
			mounted = false
			unsub?.()
		}
	}, [])

	return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
	return useContext(AuthContext)
}


