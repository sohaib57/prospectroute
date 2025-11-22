import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from './Button'
import { LanguageToggle } from './LanguageToggle'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useAuth } from '../context/AuthContext'
import { Spinner } from './Spinner'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export function Navbar() {
	const { t } = useTranslation()
	const { user, loading } = useAuth()
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-40 bg-white backdrop-blur border-b border-[#F8D12E]/60">
			<div className="relative mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
				{/* Left: Logo */}
				<Link to="/" className="flex items-center gap-3">
					<img src="/img/logo.svg" alt="ProspectRoute" className="h-7 w-auto" />
				</Link>
				{/* Middle: Nav links */}
				<nav className="hidden items-center gap-6 md:flex">
					<a href="/#how" className="text-sm font-medium text-pr-navy">
						How it works
					</a>
					<a href="/#pr-crm" className="text-sm font-medium text-pr-navy">
						PR-CRM
					</a>
					<a href="/#our-leads" className="text-sm font-medium text-pr-navy">
						Our leads
					</a>
					<a href="/#pricing" className="text-sm font-medium text-pr-navy">
						{t('common.pricing')}
					</a>
				</nav>
				{/* Right: Trustpilot + Lang + Auth buttons */}
				<div className="ms-auto flex items-center gap-2 md:gap-4">
					<img
						src="/img/trustpilot-illustration.svg"
						alt="Trustpilot"
						className="hidden h-12 w-auto md:block"
						loading="eager"
						decoding="sync"
					/>
					<LanguageToggle />
					{loading ? (
						<Spinner className="h-4 w-4" />
					) : user ? (
						<Button
							variant="secondary"
							size="xs"
							className="md:h-10 md:px-4"
							onClick={() => signOut(auth)}
						>
							{t('common.logout')}
						</Button>
					) : (
						<>
							<Link to="/login">
								<Button variant="secondary" size="xs" className="md:h-10 md:px-4">
									{t('common.login')}
								</Button>
							</Link>
							<Link to="/signup">
								<Button variant="accent" size="xs" className="ms-1 md:h-10 md:px-4">
									{t('common.signup')}
								</Button>
							</Link>
						</>
					)}
					{/* Mobile menu toggle on far right */}
					<button
						className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-pr-navy"
						aria-label="Open menu"
						onClick={() => setOpen((v) => !v)}
					>
						{open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
					</button>
				</div>
			</div>
			{/* Mobile dropdown */}
			{open && (
				<div className="md:hidden absolute left-0 right-0 top-16 z-50 border-t border-[#F8D12E]/60 bg-white/95 backdrop-blur">
					<div className="mx-auto w-full max-w-[1200px] px-4 py-3 space-y-2">
						<a href="/#how" className="block text-sm font-medium text-pr-navy">
							How it works
						</a>
						<a href="/#pr-crm" className="block text-sm font-medium text-pr-navy">
							PR-CRM
						</a>
						<a href="/#our-leads" className="block text-sm font-medium text-pr-navy">
							Our leads
						</a>
						<a href="/#pricing" className="block text-sm font-medium text-pr-navy">
							{t('common.pricing')}
						</a>
					</div>
				</div>
			)}
		</header>
	)
}


