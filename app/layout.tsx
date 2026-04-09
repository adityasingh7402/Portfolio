import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatePresence } from 'framer-motion'
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aditya Kumar - Full-stack Developer",
  description: "Personal portfolio of Aditya Kumar, a Full-stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </ThemeProvider>

        {/* Live Chat Widget */}
        <Script id="chat-widget-config" strategy="afterInteractive">
          {`window.CHAT_KEY = 'cw_c1936afccf3e749b9bf54617';`}
        </Script>
        <Script
          src="https://syncsupport.app/chat/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}