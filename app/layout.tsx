import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIChatWidget from "@/components/AIChatWidget";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { THEME_SCRIPT } from "@/lib/theme";

export const metadata: Metadata = {
  title: "TriWise Partners | Govern | Grow | Lead",
  description: "Premier multi-disciplinary legal, secretarial, and taxation advisory firm specializing in NCLT, SEBI compliance, and corporate structuring.",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // The inline script sets data-theme before first paint, so the server value can differ.
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* text/plain on the client stops React warning about script tags if the tree re-renders there */}
        <script
          type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-3 focus:py-2 focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        <SiteHeader />
        <div id="main" className="flex-1">{children}</div>
        <SiteFooter />
        <AIChatWidget />
      </body>
    </html>
  );
}
