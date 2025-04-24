// app/layout.js or pages/_app.js
import './globals.css'
import { Roboto, Open_Sans, Lato, Montserrat, Oswald, Raleway, Poppins, Ubuntu, Merriweather, PT_Serif } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], weight: ['400'], variable: '--font-roboto' })
const openSans = Open_Sans({ subsets: ['latin'], weight: ['400'], variable: '--font-opensans' })
const lato = Lato({ subsets: ['latin'], weight: ['400'], variable: '--font-lato' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400'], variable: '--font-montserrat' })
const oswald = Oswald({ subsets: ['latin'], weight: ['400'], variable: '--font-oswald' })
const raleway = Raleway({ subsets: ['latin'], weight: ['400'], variable: '--font-raleway' })
const poppins = Poppins({ subsets: ['latin'], weight: ['400'], variable: '--font-poppins' })
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['400'], variable: '--font-ubuntu' })
const merriweather = Merriweather({ subsets: ['latin'], weight: ['400'], variable: '--font-merriweather' })
const ptSerif = PT_Serif({ subsets: ['latin'], weight: ['400'], variable: '--font-ptserif' })

export const metadata = {
  title: 'Font Test',
  description: 'Testing different font families',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable} ${lato.variable} ${montserrat.variable} ${oswald.variable} ${raleway.variable} ${poppins.variable} ${ubuntu.variable} ${merriweather.variable} ${ptSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
