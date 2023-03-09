import 'sanitize.css'
import '@/styles/vars.css'
import '@/styles/globals.css'

import Head from '@/components/layout/JustHead'
import Header from '@/components/layout/Header'
import Menu from '@/components/layout/Menu'
import Pendulum from '@/components/layout/Pendulum'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {



  return <>
    <Head />
    <Header />
    <Pendulum />
    <Menu />
    <main>
      <div id="content">
        <Component {...pageProps} />
      </div>
    </main>
  </>
}
