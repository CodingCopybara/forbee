import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import FloatingChatbot from "@/components/floating-chatbot"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Forbee AI",
  description: "Created with v0",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingChatbot />
        <script src="https://sgisapi.kostat.go.kr/OpenAPI3/auth/javascriptAuth?consumer_key=81e5e7f2bafc41a5a506"></script>
      </body>
    </html>
  )
}
