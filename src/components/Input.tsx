import { forwardRef } from 'react'
import type { InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = InputHTMLAttributes<HTMLInputElement> & {
	label?: string
	error?: string
}

export const Input = forwardRef<HTMLInputElement, Props>(
	({ className, label, error, ...rest }, ref) => {
		return (
			<label className="block text-sm">
				{label && <span className="mb-1 block font-medium text-pr-navy">{label}</span>}
				<input
					ref={ref}
					className={twMerge(
						'block w-full h-11 rounded-md border border-[#DFE7EF] bg-white px-3 text-pr-navy placeholder-slate-400 shadow-sm focus:border-[#F8D12E] focus:outline-none focus:ring-2 focus:ring-[#F8D12E]',
						className,
					)}
					{...rest}
				/>
				{error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
			</label>
		)
	},
)

Input.displayName = 'Input'


