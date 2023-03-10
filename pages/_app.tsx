import 'sanitize.css'
import '@/styles/vars.css'
import '@/styles/globals.css'

import { useEffect, useState } from 'react'
import Head from '@/components/layout/JustHead'
import Header from '@/components/layout/Header'
import Menu from '@/components/layout/Menu'
import Pendulum from '@/components/layout/Pendulum'
import { useRouter } from 'next/router'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  const router = useRouter()
  const [isNotHome, setisNotHome] = useState(false)
  useEffect(() => {
      setisNotHome(router.pathname !== '/')
  },[ router.pathname ])

  return <>
    <Head />
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
