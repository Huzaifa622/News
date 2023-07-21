
import '@/styles/globals.css'
import { AppProvider } from '@/components/news';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });


export default function App({ Component, pageProps }) {
  return (

    <main className={roboto.className}>
<AppProvider>
  <Component {...pageProps} />
  </AppProvider>
  </main>
    )
};
