import Head from 'next/head'
import Header from '@/components/Header'
import Pendulum from '@/components/Pendulum'
import Works from '@/components/Works'
import Tech from '@/components/Tech'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Juji | Web Developer</title>
        <meta name="description" content="Juji is a Web Developer, he likes to sleep" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best." />
        <meta property="og:image" content="https://i.ibb.co/L6sFRMH/jujilogo.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Pendulum />
        <Works />
        <Tech />
        <Contact />
      </main>
    </>
  )
}
