import '@/styles/globals.css'
import '@/webflow/css/global.css'
import type { AppProps } from 'next/app'
import { DevLinkProvider } from '@/webflow/DevLinkProvider'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DevLinkProvider>
      <Component {...pageProps} />
    </DevLinkProvider>
  );
}
