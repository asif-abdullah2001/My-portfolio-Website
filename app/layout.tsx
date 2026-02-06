import "/public/assets/css/vendors/bootstrap.min.css"
import "/public/assets/css/vendors/swiper-bundle.min.css"
import "/public/assets/css/vendors/carouselTicker.css"
import "/public/assets/css/vendors/magnific-popup.css"
import "/public/assets/fonts/remixicon/remixicon.css"
import "/public/assets/css/main.css"

import type { Metadata } from "next"
import { Urbanist, Playfair_Display, DM_Mono, Plus_Jakarta_Sans } from "next/font/google"

const urbanist = Urbanist({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--urbanist",
	display: 'swap',
})
const playfair_display = Playfair_Display({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin'],
	variable: "--playpair",
	display: 'swap',
})
const dmMono = DM_Mono({
	weight: ['300', '400', '500'],
	subsets: ['latin'],
	variable: "--dmMono",
	display: 'swap',
})
const plusJakartaSans = Plus_Jakarta_Sans({
	weight: ['400', '500', '600', '700', '800'],
	subsets: ['latin'],
	variable: "--plusJakartaSans",
	display: 'swap',
})

export const metadata: Metadata = {
	title: "Asif Abdullah Portfolio",
	description: "Asif Abdullah - Software Quality Assurance Engineer Portfolio",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" data-bs-theme="dark" className="zelio">
			<body className={`${urbanist.variable} ${playfair_display.variable} ${dmMono.variable} ${plusJakartaSans.variable}`}>{children}</body>
		</html>
	)
}
