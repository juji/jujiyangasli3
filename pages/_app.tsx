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
            navigator.serviceWorker.register('sw.js')
            }
        `}
        </Script>
    <Header isNotHome={isNotHome} />
    <Pendulum isNotHome={isNotHome} />
    <Menu isNotHome={isNotHome} />
    <main>
      <div id="content">
        <Component {...pageProps} />
      </div>
    </main>
  </>
}
