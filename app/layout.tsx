import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Riza Maulana Tamsirin",
  description:
    "Portfolio website of Riza Maulana Tamsirin, a Frontend Developer and Informatics student at ITENAS",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
    "Web Development",
  ],
  authors: [{ name: "Riza Maulana Tamsirin" }],
  creator: "Riza Maulana Tamsirin",
  publisher: "Riza Maulana Tamsirin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com",
    title: "Riza Maulana Tamsirin",
    description:
      "Portfolio website of Riza Maulana Tamsirin, a Frontend Developer and Informatics student at ITENAS",
    siteName: "Riza Maulana Tamsirin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riza Maulana Tamsirin",
    description:
      "Portfolio website of Riza Maulana Tamsirin, a Frontend Developer and Informatics student at ITENAS",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#FFEB3B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-black antialiased font-[var(--font-space-grotesk)]">
        {children}
      </body>
    </html>
  );
}
