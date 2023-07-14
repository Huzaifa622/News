import { AppProvider } from '@/components/news'
import '@/styles/globals.css'

import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
<AppProvider>
  <Component {...pageProps} />
  </AppProvider>
  </main>
    )
};
