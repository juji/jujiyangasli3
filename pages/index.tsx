import { useEffect, useRef, useState } from 'react'

import Head from 'next/head'
import Header from '@/components/Header'
import Pendulum from '@/components/Pendulum'
import Works from '@/components/Works'
import Tech from '@/components/Tech'
import Contact from '@/components/Contact'


export default function Home() {

  const observer = useRef<IntersectionObserver | null>(null)
  const [intersected, setIntersected] = useState(false)

  // intersect observer
  useEffect(() => {

      if(typeof window === 'undefined') return () => {}

      let options = {
        rootMargin: "0px",
        threshold: 0.01,
      };
      
      observer.current = new IntersectionObserver((entries) => {
        setIntersected(entries[0].isIntersecting)
      }, options);
  
      observer.current.observe(
        document.getElementById('content') as Element
      );

      return () => {
        if(observer.current) observer.current.disconnect()
      }
  
  },[ typeof window === 'undefined', intersected ])

  return (
    <>
      <Head>
        <title>Juji | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best." />
        <meta property="og:image" content="https://i.ibb.co/L6sFRMH/jujilogo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={intersected ? 'intersected' : ''}>
          <Header />
          <Pendulum />
        <div id='content'>
          <Works />
          <Tech />
          <Contact />
        </div>
      </main>
    </>
  )
}
