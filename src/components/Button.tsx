import { forwardRef } from 'react'
import type { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'ghost' | 'accent'
	size?: 'xs' | 'sm' | 'md' | 'lg'
}

const base =
	'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'

const variants: Record<NonNullable<Props['variant']>, string> = {
	primary: 'bg-pr-navy text-white hover:bg-pr-slate',
	secondary:
		'bg-white text-pr-navy border-none ring-1 ring-[#F8D12E]',
	ghost: 'bg-transparent text-pr-navy hover:bg-slate-100',
	accent: 'bg-pr-yellow text-pr-navy border-none ring-1 ring-[#F8D12E]',
}

const sizes: Record<NonNullable<Props['size']>, string> = {
	xs: 'h-8 px-2 text-xs',
	sm: 'h-9 px-3 text-sm',
	md: 'h-10 px-4',
	lg: 'h-12 px-6 text-lg',
}

export const Button = forwardRef<HTMLButtonElement, Props>(
	({ className, variant = 'primary', size = 'md', ...rest }, ref) => {
		return (
			<button
				ref={ref}
				className={twMerge(base, variants[variant], sizes[size], className)}
				{...rest}
			/>
		)
	},
)

Button.displayName = 'Button'


