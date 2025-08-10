import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sanjay Nanjundappa - Data Engineer Portfolio',
  description: 'Data Engineer with expertise in Azure, Databricks, Power BI, and ETL/ELT pipelines. Based in Toronto, Canada.',
  keywords: 'Data Engineer, Azure, Databricks, Power BI, ETL, ELT, Toronto, Canada',
  authors: [{ name: 'Sanjay Nanjundappa' }],
  openGraph: {
    title: 'Sanjay Nanjundappa - Data Engineer Portfolio',
    description: 'Data Engineer with expertise in Azure, Databricks, Power BI, and ETL/ELT pipelines.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 