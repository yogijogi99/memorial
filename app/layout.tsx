import type React from "react"
import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "기억의 서랍 - 시니어 프로필",
  description: "소중한 분의 인생 이야기를 기록하고 보존하세요",
  generator: "v0.app",
  icons: {
    icon: "/images/logo.jpg",
    apple: "/images/logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`font-sans antialiased ${notoSansKR.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
