const PHONE_DISPLAY = '794 164 707'
const PHONE_LINK = 'tel:+48794164707'

const warningSigns = [
	'Wybija bezpieczniki lub różnicówkę',
	'Brak prądu w części domu albo mieszkania',
	'Gniazdko iskrzy lub czuć zapach spalenizny',
	'Nie działa oświetlenie albo pojedynczy obwód',
	'Po remoncie instalacja działa niestabilnie',
	'Potrzebna szybka diagnoza usterki',
]

const services = [
	{
		title: 'Usuwanie awarii',
		text: 'Szybkie sprawdzenie problemu i konkretne działanie przy usterkach instalacji elektrycznej.',
	},
	{
		title: 'Naprawa instalacji',
		text: 'Naprawy obwodów, gniazdek, włączników, oświetlenia i podstawowych elementów instalacji.',
	},
	{
		title: 'Nowe punkty elektryczne',
		text: 'Dodatkowe gniazdka, włączniki i przygotowanie instalacji pod nowe urządzenia.',
	},
	{
		title: 'Montaż oświetlenia',
		text: 'Montaż lamp, kinkietów, oświetlenia sufitowego i prostych podłączeń.',
	},
	{
		title: 'Wymiana osprzętu',
		text: 'Wymiana zużytych gniazdek, włączników i elementów instalacji na nowe i estetyczne.',
	},
	{
		title: 'Modernizacja instalacji',
		text: 'Uporządkowanie i odświeżenie instalacji w domu, mieszkaniu lub lokalu.',
	},
]

const reasons = [
	{
		title: 'Szybki kontakt',
		text: 'Ta strona jest zrobiona pod telefon i pilne zgłoszenia. Minimum klików, maksimum konkretu.',
	},
	{
		title: 'Lokalnie',
		text: 'Lębork i okolice. Krótsza ścieżka kontaktu i prostsze ustalenie dalszych kroków.',
	},
	{
		title: 'Jasne ustalenia',
		text: 'Bez rozwlekania. Najpierw problem, potem rozwiązanie i ustalenie terminu.',
	},
	{
		title: 'Dla domu i lokalu',
		text: 'Awarie, naprawy i prace instalacyjne dla mieszkań, domów i małych firm.',
	},
]

const faqs = [
	{
		q: 'Czy realizujesz pilne awarie?',
		a: 'Tak. Przy pilnych problemach najlepiej od razu zadzwonić i krótko opisać usterkę.',
	},
	{
		q: 'Na jakim obszarze działasz?',
		a: 'Głównie Lębork i okolice. Najszybciej ustalisz dostępność telefonicznie.',
	},
	{
		q: 'Czy można umówić wycenę?',
		a: 'Tak. Zadzwoń i opisz zakres prac, wtedy łatwiej ustalić termin i kolejne kroki.',
	},
	{
		q: 'Jakie usługi wykonujesz?',
		a: 'Awarie, naprawy instalacji, wymiana osprzętu, nowe punkty elektryczne, montaż oświetlenia i prace modernizacyjne.',
	},
	{
		q: 'Jaki kontakt jest najszybszy?',
		a: 'Telefon. To najlepsza opcja przy awariach i pilnych zgłoszeniach.',
	},
]

function SectionIntro({
	label,
	title,
	text,
	align = 'left',
}: {
	label: string
	title: string
	text?: string
	align?: 'left' | 'center'
}) {
	return (
		<div
			className={`max-w-3xl ${
				align === 'center' ? 'mx-auto text-center' : 'text-left'
			}`}
		>
			<p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-400">
				{label}
			</p>
			<h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
				{title}
			</h2>
			{text ? (
				<p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
					{text}
				</p>
			) : null}
		</div>
	)
}

function PhoneButton({
	children,
	className = '',
}: {
	children: React.ReactNode
	className?: string
}) {
	return (
		<a
			href={PHONE_LINK}
			aria-label={`Zadzwoń: ${PHONE_DISPLAY}`}
			className={`inline-flex items-center justify-center rounded-[1.35rem] border border-amber-300/20 bg-amber-500 px-6 py-4 text-sm font-semibold text-slate-950 shadow-[0_12px_40px_rgba(245,158,11,0.22)] transition hover:-translate-y-0.5 hover:bg-amber-400 ${className}`}
		>
			{children}
		</a>
	)
}

function GhostButton({
	href,
	children,
	className = '',
}: {
	href: string
	children: React.ReactNode
	className?: string
}) {
	return (
		<a
			href={href}
			className={`inline-flex items-center justify-center rounded-[1.35rem] border border-white/12 bg-white/[0.03] px-6 py-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.06] ${className}`}
		>
			{children}
		</a>
	)
}

export default function Page() {
	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqs.map((item) => ({
			'@type': 'Question',
			name: item.q,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.a,
			},
		})),
	}

	const localBusinessSchema = {
		'@context': 'https://schema.org',
		'@type': 'Electrician',
		name: 'Elektryk Lębork',
		areaServed: 'Lębork i okolice',
		telephone: '+48 794 164 707',
		url: '',
		description:
			'Szybka pomoc przy awariach i instalacjach elektrycznych w Lęborku i okolicy.',
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(localBusinessSchema),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
			/>

			<main className="min-h-screen overflow-x-hidden bg-[#050816] text-slate-100">
				<div className="pointer-events-none fixed inset-0 opacity-100">
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.11),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_22%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_30%)]" />
					<div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.42),transparent_85%)]" />
					<div className="absolute -left-24 top-32 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
					<div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
				</div>

				<header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/88 backdrop-blur-xl">
					<div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
						<a href="#top" className="group inline-flex items-center gap-3">
							<span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-sm font-semibold text-white">
								EL
							</span>
							<span className="text-sm font-semibold tracking-wide text-white">
								Elektryk Lębork
							</span>
						</a>

						<div className="hidden items-center gap-4 md:flex">
							<a
								href={PHONE_LINK}
								className="text-base font-semibold tracking-wide text-slate-200 transition hover:text-white"
								aria-label={`Zadzwoń: ${PHONE_DISPLAY}`}
							>
								{PHONE_DISPLAY}
							</a>
							<PhoneButton className="px-7 py-4 text-base">
								Zadzwoń teraz
							</PhoneButton>
						</div>

						<PhoneButton className="px-5 py-3 text-sm md:hidden">
							Telefon
						</PhoneButton>
					</div>
				</header>

				<section id="top" className="relative border-b border-white/10">
					<div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
						<div className="relative">
							<div className="mb-7 inline-flex items-center rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
								Szybka pomoc • Lębork i okolice
							</div>

							<h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
								Lokalny elektryk w Lęborku
								<span className="mt-2 block text-white/70">
									szybka pomoc przy awariach i instalacjach
								</span>
							</h1>

							<div className="mt-8 max-w-2xl border-l-2 border-amber-500/50 pl-5">
								<p className="text-base leading-8 text-slate-300 sm:text-lg">
									Nagła usterka, brak prądu, problem z gniazdkiem albo potrzebne
									prace instalacyjne? Zadzwoń i przejdź od razu do konkretów.
								</p>
							</div>

							<div className="mt-10 flex flex-col gap-4 sm:flex-row">
								<PhoneButton className="min-h-[72px] px-8 text-base sm:text-lg">
									Zadzwoń teraz — {PHONE_DISPLAY}
								</PhoneButton>
								<GhostButton
									href="#kontakt"
									className="min-h-[72px] px-8 text-base"
								>
									Przejdź do kontaktu
								</GhostButton>
							</div>

							<div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
								{['Pilne awarie', 'Nowe instalacje', 'Szybki kontakt'].map(
									(item) => (
										<div
											key={item}
											className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-center text-sm font-medium text-slate-200"
										>
											{item}
										</div>
									),
								)}
							</div>
						</div>

						<div className="relative">
							<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-8">
								<div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(245,158,11,0.15),transparent_35%,transparent_65%,rgba(255,255,255,0.03))]" />
								<div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-white/10" />
								<div className="absolute bottom-0 left-0 h-24 w-24 border-r border-t border-amber-500/20" />

								<div className="relative">
									<p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-amber-300">
										Pilne zgłoszenie
									</p>

									<div className="mt-6 rounded-[1.75rem] border border-amber-500/20 bg-black/20 p-5">
										<p className="text-xs uppercase tracking-[0.24em] text-slate-400">
											Telefon
										</p>
										<a
											href={PHONE_LINK}
											className="mt-2 block text-4xl font-semibold tracking-tight text-white transition hover:text-amber-300 sm:text-5xl"
											aria-label={`Zadzwoń: ${PHONE_DISPLAY}`}
										>
											{PHONE_DISPLAY}
										</a>
										<p className="mt-4 max-w-sm text-sm leading-7 text-slate-300">
											Najszybsza droga przy awarii. Krótki opis problemu i od
											razu przejście do ustaleń.
										</p>
									</div>

									<div className="mt-5 space-y-3">
										{[
											'Awarie elektryczne',
											'Naprawy i wymiana osprzętu',
											'Domy, mieszkania, lokale',
										].map((item, index) => (
											<div
												key={item}
												className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
											>
												<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-sm font-semibold text-amber-300">
													0{index + 1}
												</span>
												<span className="text-sm font-medium text-slate-200">
													{item}
												</span>
											</div>
										))}
									</div>

									<PhoneButton className="mt-6 flex min-h-[72px] w-full text-base sm:text-lg">
										Zadzwoń teraz
									</PhoneButton>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
					<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
						<div>
							<SectionIntro
								label="Objawy awarii"
								title="Są sytuacje, w których najlepiej dzwonić od razu"
								text="Ta sekcja nie ma opowiadać marki. Ma pomóc klientowi szybko rozpoznać, że to moment na kontakt."
							/>

							<div className="mt-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
								<div className="grid gap-4 sm:grid-cols-2">
									{warningSigns.map((item, index) => (
										<div
											key={item}
											className="rounded-2xl border border-white/10 bg-black/20 p-4"
										>
											<p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-300">
												0{index + 1}
											</p>
											<p className="text-sm leading-7 text-slate-200">{item}</p>
										</div>
									))}
								</div>
							</div>
						</div>

						<div className="lg:pt-12">
							<div className="sticky top-28 rounded-[2rem] border border-amber-500/20 bg-[linear-gradient(180deg,rgba(245,158,11,0.12),rgba(245,158,11,0.04))] p-6 sm:p-8">
								<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
									Szybki kontakt
								</p>
								<h3 className="mt-4 max-w-md text-3xl font-semibold tracking-tight text-white sm:text-4xl">
									W pilnych sprawach telefon działa najlepiej
								</h3>
								<p className="mt-5 max-w-lg text-sm leading-7 text-slate-200">
									Zamiast długiego formularza i czekania na odpowiedź, tutaj
									priorytetem jest szybki kontakt. Opisz problem i przejdź od
									razu do konkretów.
								</p>

								<PhoneButton className="mt-8 min-h-[80px] w-full text-lg">
									Zadzwoń — {PHONE_DISPLAY}
								</PhoneButton>

								<div className="mt-6 grid gap-3 sm:grid-cols-3">
									{['Lębork', 'Awarie', 'Instalacje'].map((item) => (
										<div
											key={item}
											className="rounded-2xl border border-white/10 bg-black/20 px-4 py-4 text-center text-sm font-medium text-slate-100"
										>
											{item}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="uslugi"
					className="border-b border-white/10 py-16 sm:py-20 lg:py-24"
				>
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<SectionIntro
							label="Usługi"
							title="Najczęściej szukane prace"
							text="Krótka lista, bez rozbudowanego katalogu. Tylko to, czego klienci faktycznie szukają na szybkim landingu."
						/>

						<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
							{services.map((service, index) => (
								<article
									key={service.title}
									className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-amber-500/25 hover:bg-white/[0.05]"
								>
									<div className="absolute right-0 top-0 h-20 w-20 border-l border-b border-white/8 transition group-hover:border-amber-500/20" />
									<p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-300">
										0{index + 1}
									</p>
									<h3 className="text-2xl font-semibold text-white">
										{service.title}
									</h3>
									<p className="mt-4 text-sm leading-7 text-slate-300">
										{service.text}
									</p>
								</article>
							))}
						</div>

						<div className="mt-10 rounded-[2rem] border border-white/10 bg-[linear-gradient(90deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-6 sm:p-8">
							<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
								<div className="max-w-2xl">
									<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
										Telefon przy awarii
									</p>
									<h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
										Masz problem z instalacją? Nie komplikuj kontaktu.
									</h3>
									<p className="mt-3 text-sm leading-7 text-slate-300">
										W tym układzie strona ma prowadzić do telefonu, nie do
										długiego czytania.
									</p>
								</div>

								<PhoneButton className="min-h-[76px] shrink-0 px-8 text-base sm:text-lg">
									Zadzwoń teraz
								</PhoneButton>
							</div>
						</div>
					</div>
				</section>

				<section
					id="dlaczego-my"
					className="border-b border-white/10 py-16 sm:py-20 lg:py-24"
				>
					<div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
						<div>
							<SectionIntro
								label="Dlaczego ten układ działa"
								title="Mniej opowieści. Więcej decyzji o kontakcie."
								text="Industrial premium, ale bez przeładowania. Ma wyglądać lepiej niż typowy landing AI i dalej sprzedawać telefon."
							/>

							<div className="mt-8 space-y-4">
								{[
									'Mocny numer telefonu nad foldem',
									'Czytelna ścieżka do kontaktu',
									'Lokalność i pilny charakter usługi',
								].map((item) => (
									<div
										key={item}
										className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm font-medium text-slate-200"
									>
										{item}
									</div>
								))}
							</div>
						</div>

						<div className="grid gap-5 sm:grid-cols-2">
							{reasons.map((item) => (
								<div
									key={item.title}
									className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
								>
									<div className="mb-5 h-12 w-12 rounded-2xl border border-amber-500/20 bg-amber-500/10" />
									<h3 className="text-xl font-semibold text-white">
										{item.title}
									</h3>
									<p className="mt-4 text-sm leading-7 text-slate-300">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="border-b border-white/10 py-16 sm:py-20 lg:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<SectionIntro
							label="Jak to działa"
							title="Prosto, szybko, bez zbędnych kroków"
							text="Ta część buduje zaufanie bez sztucznych opinii. Klient ma od razu rozumieć, czego się spodziewać."
							align="center"
						/>

						<div className="mt-10 grid gap-5 md:grid-cols-3">
							{[
								{
									step: '01',
									title: 'Telefon',
									text: 'Klient dzwoni i krótko opisuje problem albo zakres prac.',
								},
								{
									step: '02',
									title: 'Ustalenie',
									text: 'Szybko ustalane są dalsze kroki, dostępność i zakres pomocy.',
								},
								{
									step: '03',
									title: 'Realizacja',
									text: 'Priorytetem jest sprawne działanie i jasna komunikacja.',
								},
							].map((item) => (
								<div
									key={item.step}
									className="rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-6"
								>
									<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
										{item.step}
									</p>
									<h3 className="mt-4 text-2xl font-semibold text-white">
										{item.title}
									</h3>
									<p className="mt-4 text-sm leading-7 text-slate-300">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section
					id="faq"
					className="border-b border-white/10 py-16 sm:py-20 lg:py-24"
				>
					<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
						<SectionIntro
							label="FAQ"
							title="Najważniejsze pytania"
							text="Krótko, czytelnie i bez rozwlekania."
							align="center"
						/>

						<div className="mt-10 space-y-4">
							{faqs.map((item) => (
								<details
									key={item.q}
									className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6"
								>
									<summary className="cursor-pointer list-none pr-8 text-left text-lg font-semibold text-white marker:hidden">
										{item.q}
									</summary>
									<p className="mt-4 text-sm leading-7 text-slate-300">
										{item.a}
									</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<section id="kontakt" className="py-16 sm:py-20 lg:py-24">
					<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
						<div className="relative overflow-hidden rounded-[2.25rem] border border-amber-500/20 bg-[linear-gradient(135deg,rgba(245,158,11,0.12),rgba(255,255,255,0.03),rgba(255,255,255,0.02))] p-8 sm:p-10 lg:p-12">
							<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.03),transparent)]" />
							<div className="absolute right-0 top-0 h-28 w-28 border-l border-b border-white/10" />
							<div className="absolute bottom-0 left-0 h-28 w-28 border-r border-t border-amber-500/20" />

							<div className="relative text-center">
								<p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-amber-300">
									Kontakt
								</p>
								<h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
									Zadzwoń i opisz problem
								</h2>
								<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
									Przy awarii i pilnych pracach telefon to najszybsza droga do
									ustalenia dalszych kroków.
								</p>

								<a
									href={PHONE_LINK}
									aria-label={`Zadzwoń: ${PHONE_DISPLAY}`}
									className="mt-8 inline-block text-5xl font-semibold tracking-tight text-white transition hover:text-amber-300 sm:text-6xl lg:text-7xl"
								>
									{PHONE_DISPLAY}
								</a>

								<div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
									<PhoneButton className="min-h-[80px] w-full max-w-md text-lg sm:w-auto sm:px-10">
										Zadzwoń teraz
									</PhoneButton>
									<GhostButton
										href="#uslugi"
										className="min-h-[80px] w-full max-w-md text-lg sm:w-auto sm:px-10"
									>
										Zobacz usługi
									</GhostButton>
								</div>

								<div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-200">
									{[
										'Lębork i okolice',
										'Awarie i instalacje',
										'Szybki kontakt',
									].map((item) => (
										<span
											key={item}
											className="rounded-full border border-white/10 bg-black/20 px-4 py-2"
										>
											{item}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				<footer className="border-t border-white/10 py-6">
					<div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 text-center text-sm text-slate-400 sm:px-6 lg:px-8">
						<p>Elektryk Lębork</p>
						<p>Telefon: {PHONE_DISPLAY}</p>
					</div>
				</footer>

				<div className="fixed bottom-5 right-5 z-50 hidden lg:block">
					<PhoneButton className="min-h-[72px] px-8 text-base">
						Zadzwoń — {PHONE_DISPLAY}
					</PhoneButton>
				</div>

				<div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#050816]/95 p-3 backdrop-blur-xl sm:hidden">
					<PhoneButton className="min-h-[74px] w-full text-base">
						Zadzwoń teraz — {PHONE_DISPLAY}
					</PhoneButton>
				</div>
			</main>
		</>
	)
}
