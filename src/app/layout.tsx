import type { Metadata } from 'next'
import { interTight } from '@/fonts'
import '@/styles/global.scss'
import { TaskContextProvider } from '@/context/taskContext'

export const metadata: Metadata = {
  title: 'Legaplan Todo',
  description: 'Front-end test',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <TaskContextProvider>
      <html lang="en">
        <body className={`${interTight.className}`}>{children}</body>
      </html>
    </TaskContextProvider>
  )
}
