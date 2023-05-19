import '@/styles/globals.css'
import '@/devlink/global.css'
import type { AppProps } from 'next/app'
import { InteractionsProvider, createIX2Engine } from '@/devlink'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <InteractionsProvider createEngine={createIX2Engine}>
      <Component {...pageProps} />
    </InteractionsProvider>
  );
}
