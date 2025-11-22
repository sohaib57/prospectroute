import type { PropsWithChildren } from 'react'
import { Button } from './Button'

type Props = PropsWithChildren<{
	title?: string
	open: boolean
	onClose: () => void
	actions?: React.ReactNode
}>

export function Modal({ title, open, onClose, actions, children }: Props) {
	if (!open) return null
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			<div
				className="absolute inset-0 bg-black/40"
				aria-hidden="true"
				onClick={onClose}
			/>
			<div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
				<div className="mb-4 flex items-center justify-between">
					{title && <h3 className="text-lg font-semibold text-pr-navy">{title}</h3>}
					<Button variant="ghost" onClick={onClose} aria-label="Close">
						✕
					</Button>
				</div>
				<div>{children}</div>
				{actions && <div className="mt-6 flex justify-end gap-2">{actions}</div>}
			</div>
		</div>
	)
}


