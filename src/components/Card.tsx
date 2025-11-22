import type { PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = PropsWithChildren<{
	className?: string
	title?: string
	footer?: React.ReactNode
}>

export function Card({ className, title, footer, children }: Props) {
	return (
		<div className={twMerge('rounded-lg border border-slate-200 bg-white shadow-sm', className)}>
			{title && (
				<div className="border-b border-slate-100 px-4 py-3">
					<h3 className="font-semibold text-pr-[#6485A8]">{title}</h3>
				</div>
			)}
			<div className="px-4 py-4">{children}</div>
			{footer && <div className="border-t border-slate-100 px-4 py-3">{footer}</div>}
		</div>
	)
}


