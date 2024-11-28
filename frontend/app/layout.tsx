import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const PorterSans = localFont({
	src: "./fonts/PorterSans.woff",
	variable: "--font-porter-sans",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: "ESV Film Photos",
	description: "Gallery of film photos",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth snap-y snap-mandatory relative">
			<body
				className={`${PorterSans.className} antialiased overflow-x-hidden`}
			>
				{children}
			</body>
		</html>
	);
}
