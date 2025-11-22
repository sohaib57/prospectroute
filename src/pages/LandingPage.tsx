import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'
import { Select } from '../components/Select'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Topbar } from '../components/Topbar'
import { SectionTag } from '../components/SectionTag'


export default function LandingPage() {
	const [email, setEmail] = useState('')
	const [howExpanded, setHowExpanded] = useState(false)
	return (
		<div className="min-h-screen bg-white text-pr-navy">
			<Topbar />
			<Navbar />
			{/* Hero */}
			<section className="relative overflow-hidden bg-pr-yellow">
				<div className="pointer-events-none absolute inset-0 opacity-20">
					{/* placeholder pattern */}
					<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pr-yellow" />
				</div>
				<div className="relative mx-auto grid w-full max-w-[1200px] grid-cols-1 items-stretch gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.05fr_1fr] md:py-24 md:min-h-[620px] lg:px-8">
					<div className="max-w-xl h-full flex flex-col justify-between">
						<div className="mb-3 md:mb-4">
							<SectionTag>PROSPECTROUTE</SectionTag>
						</div>
						<h1 className="text-3xl sm:text-4xl font-extrabold leading-tight md:text-[48px] md:leading-[1.15]">
							<span className="block md:inline">High volume, pristine,</span>
							<br className="hidden md:block" />
							<span className="block md:hidden">exclusive</span>
							<span className="block md:hidden">leads.</span>
							<span className="hidden md:inline">exclusive leads.</span>
						</h1>
						<p className="mt-4 text-sm sm:text-base md:text-lg opacity-90">
							Up to 50 web leads per day, exclusive and high quality.
						</p>
						<div className="mt-6 inline-block p-2 md:p-3">
							<img
								src="/img/hero-illustration.svg"
								alt="Agent at desk"
								className="h-40 w-auto sm:h-48 md:h-auto"
								loading="eager"
								decoding="sync"
							/>
						</div>
						{/* No hero CTAs per Figma */}
					</div>
					<div className="md:justify-self-end h-full w-full md:w-[440px]">
						<div className="h-full w-full rounded-xl bg-white/30 p-5 ring-1 ring-white/60 shadow-[0px_4px_11px_0px_rgba(101,122,139,0.10)] backdrop-blur-sm">
							<div className="h-full flex flex-col rounded-xl border border-[#DFE7EF] bg-white p-6 shadow-[0px_4px_11px_0px_rgba(101,122,139,0.102)]">
							<h3 className="mb-4 text-[28px] leading-snug text-pr-navy font-bold">
								<span className="block font-semibold">Want to see pricing?</span>
								<span className="block">We’ll email it!</span>
							</h3>
							<form
								className="space-y-3 flex flex-col flex-1"
								onSubmit={(e: FormEvent<HTMLFormElement>) => {
									e.preventDefault()
									if (email) alert(`Thanks! We'll email pricing to ${email}`)
								}}
							>
								<Input type="text" label="First name" placeholder="Type..." className="hidden md:block" />
								<Input
									type="email"
									required
									label="Email"
									placeholder="Type..."
									value={email}
									onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
								/>
								<Input type="text" label="Mobile (used as password)" placeholder="Type..." />
								<Select label="Agency employees" defaultValue="" className="hidden md:block">
									<option value="" disabled>
										Select...
									</option>
									<option value="1-5">1–5</option>
									<option value="6-10">6–10</option>
									<option value="11-20">11–20</option>
									<option value="21-50">21–50</option>
									<option value="50+">50+</option>
								</Select>
								<Button
									type="submit"
									className="w-full h-11 mt-auto shadow-[0px_4px_11px_0px_rgba(101,122,139,0.102)]"
								>
									Send pricing!
								</Button>
							</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* How it works */}
			<section id="how" className="bg-[#FBFEFE]">
				<div className="mx-auto w-full max-w-[1200px] px-4 pt-16 pb-32 sm:px-6 lg:px-8">
				<div className="grid items-stretch gap-10 md:grid-cols-2">
					<div>
						<SectionTag textClassName="text-[#F2B927]" showBar={false}>HOW IT WORKS</SectionTag>
						<h2 className="mb-4 text-2xl font-bold">
							<span>Hand-curated Auto/Home</span>
							<br className="hidden md:block" />
							<span>Leads - Delivered to you</span>
							<br className="hidden md:block" />
							<span>digitally, exclusively.</span>
						</h2>
						<div className="space-y-4 text-[#6485A8]">
							<p>
								Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
							</p>
							<p>
								Most lead vendors fall into one of two categories: they either have high quality at an expensive low volume, or high volume and low quality. ProspectRoute has spent hundreds of thousands of dollars to develop the next generation in insurance marketing: a high volume system that delivers prospects that close.
							</p>
							<p>
								ProspectRoute uses leads from several sources - social media, web, lead lists and more - and prequalifies each lead by phone to ensure it’s a perfect match for your agency. We collect essential information such as the address, location, driver information, vehicle information, driving history (self-reported) and more and if the lead matches your criteria we pass it along to you, digitally.
							</p>
							{howExpanded && (
								<>
									<p>
										If you use our optional CRM, called the PR-CRM,  to manage your leads the CRM instantly places a call to that lead and connects your producer with the opportunity. If no producer is available the CRM will connect the call immediately when the next producer is available.
									</p>
									<p>
										PR’s position is that generating the lead is only half the battle. If you choose, you can receive the PR-CRM free with ProspectRoute when you’re enrolled to receive leads. PR-CRM’s technology is built on the Unifyy platform and helps automate sales from many lead vendors, not just ProspectRoute.
									</p>
								</>
							)}
						</div>
						<div className="mt-5 flex gap-3">
							<Button variant="secondary" onClick={() => setHowExpanded((v) => !v)}>
								{howExpanded ? 'Click to read less' : 'Expand to read more'}
							</Button>
							<a href="#pricing">
								<Button variant="accent">Get pricing</Button>
							</a>
						</div>
					</div>
					<div className="self-stretch h-full w-full flex flex-col">
						<div className="w-full flex items-center justify-center">
							<img
								src="/img/lead-illustration.svg"
								alt="Phone call illustration"
								className="h-full w-auto"
								loading="lazy"
								decoding="async"
							/>
						</div>
						{howExpanded && (
							<div className="mt-4 max-w-prose text-[#6485A8]">
								<p>
									The PR-CRM prioritizes calls in many ways but what really makes it amazing when it’s used with ProspectRoute. This is because when PR generates a lead, the PR-CRM immediately connects your producer with the prospect by phone when it comes in. This means it’s the fastest way to get prospects on the phone. For each minute that passes from when a prospect expresses interest and a producer makes their first contact attempt, the likelihood of a sale decreases by 50%. Using PR with the PR-CRM.
								</p>
								<p className="mt-3">
									You can connect any lead vendor with the PR-CRM so you can use it even when you’re not actively using ProspectRoute for your marketing. But between the volume of high quality leads we can produce and our award-winning PR-CRM, we don’t think you’ll want to use any other vendors.
								</p>
							</div>
						)}
					</div>
				</div>
				</div>
			</section>

			{/* PR-CRM and Our Leads */}
			<section className="bg-[#F7F8F9]">
				<div className="mx-auto w-full max-w-[1200px] px-4 pt-10 pb-6 sm:px-6 lg:px-8">
				<div className="grid items-start gap-8 md:grid-cols-2 -mt-20 md:-mt-28 relative z-20">
					<Card className="border border-[#DFE7EF] border-t-[6px] border-t-[#F8D12E] shadow-[0px_4px_11px_0px_rgba(101,122,139,0.102)]">
						<span className="mb-3 block text-[15px] leading-[13.2px] font-bold tracking-[0.19em] uppercase text-[#F2B927]">THE PR‑CRM</span>
						<h3
							id="pr-crm"
							className="mb-3 font-bold tracking-normal text-xl md:text-[28px] md:leading-[1.3]"
						>
							Get double the return on your marketing dollars. Best of all, the PR-CRM is free.
						</h3>
						<div className="space-y-3 md:space-y-4 text-[#6485A8] text-[13px] md:text-[14px] leading-relaxed">
							<p>
								The ProspectRoute CRM is a very robust and effective tool created specifically and exclusively for insurance agents. PR-CRM automates and prioritizes calls, leads, emails, and SMS’s. It can be easily configured to run your entire agency, just a part of it, or to only work with ProspectRoute leads.
							</p>
							<p>
								However, we’re positive that once you start using it, you’ll decide to use it for your entire agency and all your lead vendors.
							</p>
							<p>What makes PR-CRM so good?</p>
							<p>
								When used in agency mode PR-CRM enforces high contact rates and high outreach by your producers to all the leads you have loaded into it. Additionally, PR-CRM acts as air traffic control between new leads coming in (from web or live transfer), recent leads that need followup, old leads needing some love, and existing customer service calls.
							</p>
							<p>
								Producers and agency employees who use PR-CRM spend an average of 40% more talking to clients per day, make 60% more calls per day, and close 25% more business in a month than if they were using legacy insurance management products. This is what happens when you integrate and unify all communication methods.
							</p>
							<p>
								If you want to limit PR-CRM’s role in your agency that works too. PR-CRM can be used by just a few producers or can be used as a communications-free system that just organizes your leads and tells your producers who should be called next.
							</p>
							<p>Worried about phone system stuff?</p>
							<p>
								If you’re in a situation where you can’t have PR-CRM make its own phone calls then don’t worry. PR-CRM can integrate with your existing phone system with 0 interruption or configuration needed by anyone. The PR-CRM can route all of it’s inbound and outbound calls through your existing phone system regardless of who the provider is. Remember, PR-CRM is still pretty effective without any communication abilities.
							</p>
							<p>The best part is it’s FREE.</p>
							<p>
								When you buy leads from ProspectRoute you get PR-CRM free for any week where you have an active order. On weeks when you want to take a break PR-CRM is very reasonably priced.
							</p>
						</div>
						<div className="mt-6 flex gap-3">
							<Button variant="secondary">Click to read less</Button>
							<a href="#pricing">
								<Button variant="accent">Get pricing</Button>
							</a>
						</div>
					</Card>
					<Card className="border border-[#DFE7EF] border-t-[6px] border-t-[#F8D12E] shadow-[0px_4px_11px_0px_rgba(101,122,139,0.102)]">
						<span className="mb-3 block text-[15px] leading-[13.2px] font-bold tracking-[0.19em] uppercase text-[#F2B927]">OUR LEADS</span>
						<h3
							id="our-leads"
							className="mb-3 font-bold tracking-normal text-xl md:text-[28px] md:leading-[1.3]"
						>
							WARNING: Our leads may cause a sense of euphoria, relief, or satisfaction. Seek medical attention.
						</h3>
						<div className="space-y-3 md:space-y-4 text-[#6485A8] text-[13px] md:text-[14px] leading-relaxed">
							<p>
								ProspectRoute can deliver as many leads as you want per day. It has the ability to keep all of your producers busy all day long. They will go home tired, but satisfied their commissions are increasing.
							</p>
							<p>
								We turn over rocks looking for leads and sources. We contact web leads old and new that our system predicts your underwriting will be competitive with. We have a nice but quick conversation with them to collect just enough information to make it a quality lead. We do this to lessen the friction of having the lead repeat information to you.
							</p>
							<p>
								Typically we collect the primary's name, email, phone, address or partial address, basic vehicle information, and homeowner status and information. If our system believes this information is a match for your carrier(s), it will send it This information is passed to you to call and close.
							</p>
							<p>
								When paired with the PR-CRM leads are twice as likely to close.
							</p>
						</div>
						<div className="mt-6 flex gap-3">
							<Button variant="secondary">Click to read less</Button>
							<a href="#pricing">
								<Button variant="accent">Get pricing</Button>
							</a>
						</div>
					</Card>
				</div>
				</div>
			</section>

			{/* Pricing */}
			<section id="pricing" className="bg-[#FBFEFE]">
				<div className="mx-auto w-full max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-2xl text-center">
						<p className="mb-2 text-xs font-semibold tracking-[0.2em] text-pr-dark">PRICING</p>
						<h2 className="mb-2 text-2xl font-bold">Choose your package</h2>
						<p className="text-slate-600">No contracts. No commitments. Pay as you go each week.</p>
					</div>
					<div className="mt-8 grid gap-6 md:grid-cols-3">
						<PricingCard
							tier="45–55"
							price="$915"
							per="Per week"
							features={[
								'Telemarketers: 2',
								'Hours/Day: 8',
								'Days/Week: 5',
								'Includes homeowners: Yes!',
								'100% exclusive: Yes!',
								'Post to Velocify: Yes!',
								'Dedicated reps: Yes!',
							]}
						/>
						<PricingCard
							highlight
							tier="75–85"
							price="$1,169"
							per="Per week"
							features={[
								'Telemarketers: 3',
								'Hours/Day: 8',
								'Days/Week: 5',
								'Includes homeowners: Yes!',
								'100% exclusive: Yes!',
								'Post to Velocify: Yes!',
								'Dedicated reps: Yes!',
							]}
						/>
						<PricingCard
							tier="90–110"
							price="$1,627"
							per="Per week"
							features={[
								'Telemarketers: 4',
								'Hours/Day: 8',
								'Days/Week: 5',
								'Includes homeowners: Yes!',
								'100% exclusive: Yes!',
								'Post to Velocify: Yes!',
								'Dedicated reps: Yes!',
							]}
						/>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	)
}

function PricingCard({
	tier,
	price,
	per,
	features,
	highlight,
}: {
	tier: string
	price: string
	per: string
	features: string[]
	highlight?: boolean
}) {
	return (
		<div
			className="overflow-hidden rounded-xl border border-[#DFE7EF] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.04)]"
		>
			{/* Header */}
			<div className="border-b border-[#DFE7EF] px-6 py-5 text-center">
				<h3 className="text-[22px] md:text-[24px] font-extrabold text-pr-navy">{tier}</h3>
				<p className="mt-1 text-[12px] uppercase tracking-wide text-[#6485A8]">Calls/Week</p>
			</div>

			{/* Body */}
			<div className="px-6 py-5">
				<div className="grid gap-2 text-sm">
				{features.map((f) => {
					const [label, ...rest] = f.split(':')
					const value = rest.join(':').trim()
					return (
						<div key={f} className="grid grid-cols-2 items-center gap-2">
							<span className="text-[#6485A8]">{label}</span>
							<span className="text-right font-medium text-[#0B2540]">{value}</span>
						</div>
					)
				})}
				</div>
			</div>

			{/* Footer */}
			<div className="border-t border-[#DFE7EF] bg-[#F7F8F9] px-6 py-5 text-center">
				<div className="mb-3 flex items-baseline justify-center gap-2">
					<p className="text-[22px] font-extrabold">{price}</p>
					<p className="text-sm text-slate-600">{per}</p>
				</div>
				<div className="flex justify-center">
					<Button
						variant={highlight ? 'accent' : 'secondary'}
						size="sm"
						className="w-40"
					>
						Sign up
					</Button>
				</div>
			</div>
		</div>
	)
}


