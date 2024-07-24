import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Finances APP',
  description: 'Sistema para gerenciamento financeiro'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} style={{ backgroundColor: 'black' }}>
        <Navbar />
        <div className="md:container md:mx-auto">{children}</div>
        <footer
          className="footer-container"
          style={{ fontSize: '0.8rem', padding: 'rem' }}
        >
          <Rodape
            principal={'Desenvolvido por  CODEFATHER'}
            secundario={'Secundário Text'}
            style={{ fontSize: '1rem' }}
          />
        </footer>
      </body>
    </html>
  )
}
