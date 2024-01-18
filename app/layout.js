import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DPay',
  description: 'Enjoy...',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}
      <Footer />
      </body>
     
    </html>
  )
}
