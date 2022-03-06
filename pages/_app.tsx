import '../styles/globals.css'
import type { AppProps } from 'next/app'
import firebase from '../database/index'
import GlobalContextProvider from '../contexts/GlobalContext';
function MyApp({ Component, pageProps }: AppProps) {
  const db = firebase;
  return(
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  )
}

export default MyApp
