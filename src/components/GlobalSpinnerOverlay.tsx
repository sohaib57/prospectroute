import { Spinner } from './Spinner'

export function GlobalSpinnerOverlay({ show }: { show: boolean }) {
	if (!show) return null
	return (
		<div className="fixed inset-0 z-9999 grid place-items-center bg-pr-yellow">
			<div className="flex flex-col items-center gap-4">
				<img src="/img/footer-logo.svg" alt="ProspectRoute" className="h-8 w-auto" />
				<Spinner className="h-6 w-6" />
			</div>
		</div>
	)
}


