
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './Components/Footer'
import { UserProvider } from './Context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DPay',
  description: 'Enjoy...',
}

export default function RootLayout({ children }) {
  return (

    <html lang="en">



      <body className={inter.className}>
        <UserProvider>
          {children}

          <Footer />
        </UserProvider>
      </body>


    </html>


  )
}
