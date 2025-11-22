import { twMerge } from 'tailwind-merge'

export function SectionTag({
	children,
	textClassName,
	barClassName,
	showBar = true,
}: {
	children: React.ReactNode
	textClassName?: string
	barClassName?: string
	showBar?: boolean
}) {
	return (
		<div className="inline-flex items-center gap-2">
			<span
				className={twMerge(
					'text-[11px] font-semibold tracking-[0.22em] text-pr-dark',
					textClassName,
				)}
			>
				{children}
			</span>
			{showBar && <span className={twMerge('h-[2px] w-10 bg-pr-yellow', barClassName)} />}
		</div>
	)
}


