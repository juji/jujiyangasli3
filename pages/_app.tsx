import 'sanitize.css'
import '@/styles/vars.css'
import '@/styles/globals.css'

import { useEffect, useState } from 'react'
import HtmlHead from '@/components/layout/HtmlHeader'
import Header from '@/components/layout/Header'
import Menu from '@/components/layout/Menu'
import Pendulum from '@/components/layout/Pendulum'
import { useRouter } from 'next/router'
import Script from 'next/script'

import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [isNotHome, setisNotHome] = useState(false)
  useEffect(() => {
      setisNotHome(router.pathname !== '/')
  },[ router.pathname ])

  return <>
    <HtmlHead />
    <Script id="sw-register" strategy="afterInteractive">
    {`
        if (typeof navigator.serviceWorker !== 'undefined') {
        navigator.serviceWorker.register('/sw.js?v=1')
        }
    `}
    </Script>
    <Header isNotHome={isNotHome} />
    <Pendulum isNotHome={isNotHome} />
    <Menu className={openSans.className} 
      isNotHome={isNotHome} 
      bottomPlacement={true} />
    <main className={openSans.className}>
      <div id="content">
        <Component {...pageProps} />
      </div>
    </main>
  </>
}
