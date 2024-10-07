import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'],
})
export const metadata: Metadata = {
  title: 'Pizzaria Novo Sabor',
  description: 'Um novo sabor para a sua vida',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <main className="max-w-[80%]  mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
