import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.tsx'
import { store } from './app/store'
import './i18n'
import { AuthProvider, useAuth } from './context/AuthContext'
import { GlobalSpinnerOverlay } from './components/GlobalSpinnerOverlay'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>
          <AuthGate>
            <App />
          </AuthGate>
          <Toaster position="top-right" />
        </AuthProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

function AuthGate({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth()
  const [showOverlay, setShowOverlay] = useState(true)

  useEffect(() => {
    let timeoutId: number | undefined
    if (!loading) {
      // Ensure the loader remains for at least 2 seconds after auth resolves
      timeoutId = window.setTimeout(() => setShowOverlay(false), 2000)
    } else {
      setShowOverlay(true)
    }
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId)
    }
  }, [loading])

  return (
    <>
      <GlobalSpinnerOverlay show={showOverlay} />
      {!showOverlay && children}
    </>
  )
}
