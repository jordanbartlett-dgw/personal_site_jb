import type { Metadata } from "next";
import { DM_Serif_Display, Instrument_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jordanbartlett.co"),
  title: {
    default: "Jordan Bartlett",
    template: "%s | Jordan Bartlett",
  },
  description:
    "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness. Writing Infrastructure of Belonging.",
  openGraph: {
    title: "Jordan Bartlett",
    description:
      "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness.",
    url: "https://jordanbartlett.co",
    siteName: "Jordan Bartlett",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordan Bartlett",
    description:
      "Builder. CTO. Co-founder of Doing Good Works and Foster Greatness.",
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
      className={`${dmSerif.variable} ${instrumentSans.variable}`}
    >
      <body className="bg-cream text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
