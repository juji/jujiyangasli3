import 'sanitize.css'
import '@/styles/vars.css'
import '@/styles/globals.css'

import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
// import Menu from '@/components/layout/Menu'
import Pendulum from '@/components/layout/Pendulum'
import Script from 'next/script'
import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

// import type { AppProps } from 'next/app'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: {
    default: 'Juji: Web Developer',
    template: '%s | Juji: Web Developer'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1
  },
  icons:{
    icon: '/favicon.ico'
  },
  description: 'Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best.',
  themeColor: 'black',
  manifest: '/manifest.json?v=1',
  openGraph,
  twitter,

};


const openSans = Open_Sans({
    subsets: ['latin'],
    weight: '400'
})

export default function Layout({ children }: { children: ReactNode }) {

  return <html lang="en">
      <Script id="sw-register" strategy="afterInteractive">
      {`
          if (typeof navigator.serviceWorker !== 'undefined') {
          navigator.serviceWorker.register('/sw.js?v=5')
          }
      `}
      </Script>
    <body>
      <Header menuClassName={openSans.className} />
      <Pendulum />

      <main className={openSans.className}>
        <div id="content">
          { children }
        </div>
      </main>
    </body>
  </html>
}
