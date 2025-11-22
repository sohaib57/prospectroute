import { forwardRef, SelectHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
	label?: string
	error?: string
}

export const Select = forwardRef<HTMLSelectElement, Props>(
	({ className, label, error, children, ...rest }, ref) => {
		return (
			<label className="block text-sm">
				{label && <span className="mb-1 block font-medium text-pr-navy">{label}</span>}
				<select
					ref={ref}
					className={twMerge(
						'block w-full h-11 rounded-md border border-[#DFE7EF] bg-white px-3 text-pr-navy shadow-sm focus:border-[#F8D12E] focus:outline-none focus:ring-2 focus:ring-[#F8D12E]',
						className,
					)}
					{...rest}
				>
					{children}
				</select>
				{error && <span className="mt-1 block text-xs text-red-600">{error}</span>}
			</label>
		)
	},
)

Select.displayName = 'Select'


