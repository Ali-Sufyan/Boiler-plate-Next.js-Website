import Layout from '@/components/layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from 'next/font/local'
import { Provider } from 'react-redux'

const neueu = localFont({
  src: [
    {
      path: '../../public/assets/fonts/NeueMontreal-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/NeueMontreal-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/assets/fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-neueu',

})
export default function App({ Component, pageProps }: AppProps) {
  return  (
    <div  className={`${neueu.variable} rt-wrapper font-display`}>
    <Layout>
      <main>
    <Component {...pageProps} />
    </main>
  </Layout>
  </div>
  )
}
