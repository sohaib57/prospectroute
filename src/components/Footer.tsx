import { PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export function Footer() {
	return (
		<footer className="mt-16 bg-pr-yellow pt-12">
			<div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 sm:grid-cols-3">
					<div className="space-y-3">
						<img src="/img/footer-logo.svg" alt="ProspectRoute" className="h-8 w-auto" />
						<div className="mt-4 space-y-1 text-sm text-black">
							<p className="flex items-center gap-2">
								<PhoneIcon className="h-4 w-4 text-black" />
								<span>Get in touch: (888) 776-8857</span>
							</p>
							<p className="flex items-center gap-2">
								<MapPinIcon className="h-4 w-4 text-black" />
								<span>Address line goes here</span>
							</p>
							<p className="pl-6">Street ligne goes here</p>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-6 text-sm text-black">
						<ul className="space-y-2">
							<li><a href="/#how">How it works</a></li>
							<li><a href="/#pr-crm">PR‑ CRM</a></li>
							<li><a href="/#our-leads">Our leads</a></li>
						</ul>
						<ul className="space-y-2">
							<li><a href="/#pricing">Pricing</a></li>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms & Conditions</a></li>
						</ul>
					</div>
					<div className="space-y-3">
						<img src="/img/trustpilot-illustration.svg" alt="Trustpilot" className="h-14 w-auto" />
					</div>
				</div>
			</div>
			<div className="mt-10 grid h-20 w-full place-items-center text-center text-sm text-black">

			<div className="h-px w-full bg-black/20"></div>
				<p className="m-0 leading-none">© Company 2021 All Rights Reserved.</p>
			</div>
		</footer>
	)
}


