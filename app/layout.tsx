import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.pl'

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	themeColor: '#020617',
}

export const metadata: Metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: 'Elektryk Lębork — szybka pomoc przy awariach i instalacjach',
		template: '%s | Elektryk Lębork',
	},
	description:
		'Elektryk w Lęborku i okolicy. Szybka pomoc przy awariach elektrycznych, naprawach instalacji, wymianie gniazdek, oświetleniu i pracach instalacyjnych. Zadzwoń: 794 164 707.',
	applicationName: 'Elektryk Lębork',
	keywords: [
		'elektryk lębork',
		'elektryk lębork 24h',
		'awaria elektryk lębork',
		'awarie elektryczne lębork',
		'instalacje elektryczne lębork',
		'naprawa instalacji lębork',
		'elektryk pogotowie lębork',
		'wymiana gniazdek lębork',
		'montaż oświetlenia lębork',
		'elektryk lębork i okolice',
	],
	authors: [{ name: 'Elektryk Lębork' }],
	creator: 'Elektryk Lębork',
	publisher: 'Elektryk Lębork',
	category: 'services',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'pl_PL',
		url: '/',
		siteName: 'Elektryk Lębork',
		title: 'Elektryk Lębork — szybka pomoc przy awariach i instalacjach',
		description:
			'Szybka pomoc przy awariach i instalacjach elektrycznych w Lęborku i okolicy. Zadzwoń: 794 164 707.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Elektryk Lębork — szybka pomoc przy awariach i instalacjach',
		description:
			'Lokalny elektryk w Lęborku. Awarie, naprawy, instalacje, szybki kontakt.',
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang="pl">
			<body className="bg-slate-950 text-slate-100 antialiased">
				{children}
			</body>
		</html>
	)
}
