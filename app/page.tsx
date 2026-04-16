export default function Home() {
	return (
		<main className="min-h-screen bg-white text-slate-900">
			<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
					<div>
						<p className="text-xl font-bold">Elektryk Lębork 24h</p>
						<p className="text-sm text-slate-600">
							Szybka pomoc przy awariach prądu
						</p>
					</div>

					<a
						href="tel:+48794164707"
						className="hidden rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 md:inline-block"
					>
						📞 Zadzwoń teraz
					</a>
				</div>
			</header>

			<section className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:py-20">
				<div>
					<p className="mb-3 inline-block rounded-full bg-red-50 px-3 py-1 text-sm font-medium text-red-700">
						Pogotowie elektryczne • Lębork i okolice • 24/7
					</p>

					<h1 className="text-4xl font-extrabold leading-tight md:text-6xl">
						Elektryk Lębork – dojazd nawet w 30 minut
					</h1>

					<p className="mt-5 text-lg leading-8 text-slate-700">
						Brak prądu, zwarcie, awaria instalacji? Działamy szybko na terenie
						Lęborka i okolic. Zadzwoń teraz – szybka diagnoza i pomoc na
						miejscu.
					</p>

					<div className="mt-8 flex flex-col gap-4 sm:flex-row">
						<a
							href="tel:+48794164707"
							className="rounded-full bg-blue-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
						>
							📞 Zadzwoń: +48 794 164 707
						</a>

						<a
							href="sms:+48794164707"
							className="rounded-full border border-slate-300 px-6 py-4 text-center text-lg font-semibold text-slate-900 transition hover:bg-slate-50"
						>
							💬 Wyślij SMS
						</a>
					</div>

					<p className="mt-4 text-sm text-slate-600">
						Przy awariach najlepiej zadzwonić – szybciej ustalimy pomoc.
					</p>

					<div className="mt-8 grid gap-3 sm:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Szybki dojazd</p>
							<p className="mt-1 text-sm text-slate-600">Nawet 30 minut</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Pomoc 24/7</p>
							<p className="mt-1 text-sm text-slate-600">
								Awarie i pilne naprawy
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
							<p className="font-semibold">Lębork i okolice</p>
							<p className="mt-1 text-sm text-slate-600">Dojazd do klienta</p>
						</div>
					</div>
				</div>

				<div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
					<h2 className="text-2xl font-bold">Najczęstsze usługi</h2>

					<ul className="mt-6 space-y-4 text-lg text-slate-700">
						<li>✔️ Usuwanie awarii elektrycznych</li>
						<li>✔️ Naprawa instalacji</li>
						<li>✔️ Montaż gniazdek i oświetlenia</li>
						<li>✔️ Diagnostyka problemów z prądem</li>
						<li>✔️ Wymiana bezpieczników</li>
						<li>✔️ Pogotowie elektryczne 24h</li>
					</ul>

					<a
						href="tel:+48794164707"
						className="mt-8 block rounded-full bg-blue-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-sm transition hover:bg-blue-700"
					>
						Zadzwoń po pomoc
					</a>
				</div>
			</section>

			<section className="border-y border-slate-200 bg-slate-50">
				<div className="mx-auto max-w-6xl px-4 py-14">
					<h2 className="text-center text-3xl font-bold">
						Dlaczego warto zadzwonić?
					</h2>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Szybka reakcja</h3>
							<p className="mt-3 text-slate-600">
								Przy awarii liczy się czas – szybki kontakt i działanie.
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Pomoc na miejscu</h3>
							<p className="mt-3 text-slate-600">
								Dojazd do klienta i szybkie rozwiązanie problemu.
							</p>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-white p-6">
							<h3 className="text-xl font-semibold">Prosty kontakt</h3>
							<p className="mt-3 text-slate-600">
								Tylko telefon lub SMS – bez formularzy.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="kontakt" className="bg-blue-600 text-white">
				<div className="mx-auto max-w-4xl px-4 py-14 text-center">
					<h2 className="text-3xl font-bold md:text-4xl">
						Brak prądu? Zadzwoń teraz
					</h2>

					<p className="mt-4 text-lg text-blue-100">
						Szybko ustalimy problem i dojazd na miejsce.
					</p>

					<div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
						<a
							href="tel:+48794164707"
							className="rounded-full bg-white px-6 py-4 text-lg font-semibold text-blue-600 shadow-sm transition hover:bg-slate-100"
						>
							📞 +48 794 164 707
						</a>

						<a
							href="sms:+48794164707"
							className="rounded-full border border-white/40 px-6 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
						>
							💬 SMS
						</a>
					</div>
				</div>
			</section>

			<a
				href="tel:+48794164707"
				className="fixed bottom-4 right-4 z-50 rounded-full bg-blue-600 px-5 py-4 text-sm font-semibold text-white shadow-lg transition hover:bg-blue-700 md:hidden"
			>
				📞 Zadzwoń teraz
			</a>
		</main>
	)
}
