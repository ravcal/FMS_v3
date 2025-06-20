import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { ErrorBoundary } from "@/components/error-boundary"
import { Toaster } from "@/components/ui/sonner" // 1. Import the Toaster
import "leaflet/dist/leaflet.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cassandra",
  description: "Comprehensive fleet management solution by BERU",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ErrorBoundary>{children}</ErrorBoundary>
          <Toaster /> {/* 2. Add the Toaster component here */}
        </ThemeProvider>
      </body>
    </html>
  )
}