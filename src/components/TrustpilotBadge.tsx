export function TrustpilotBadge({ className = '' }: { className?: string }) {
	return (
		<div className={`inline-flex items-center gap-2 rounded-md bg-white/80 px-2 py-1 text-xs text-pr-navy shadow-sm ${className}`}>
			<span className="inline-flex items-center gap-1">
				<span className="inline-block h-2 w-2 rounded-[2px] bg-[#00B67A]" />
				<span className="inline-block h-2 w-2 rounded-[2px] bg-[#00B67A]" />
				<span className="inline-block h-2 w-2 rounded-[2px] bg-[#00B67A]" />
				<span className="inline-block h-2 w-2 rounded-[2px] bg-[#00B67A]" />
				<span className="inline-block h-2 w-2 rounded-[2px] bg-[#00B67A]" />
			</span>
			<span className="font-semibold">Trustpilot</span>
			<span className="opacity-70">4.9</span>
		</div>
	)
}


