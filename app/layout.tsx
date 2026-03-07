import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AnimatePresence } from 'framer-motion';
import Script from "next/script";

export const metadata: Metadata = {
  title: "Aditya Kumar - Full-Stack Developer",
  description: "Portfolio of Aditya Kumar — Full-Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </ThemeProvider>

        {/* Live Chat Widget */}
        <Script id="chat-widget-config" strategy="afterInteractive">
          {`window.CHAT_KEY = 'cw_2b1180c05bff63783ed0e546';`}
        </Script>
        <Script
          src="https://email-route-with-clouflare.vercel.app/chat/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}