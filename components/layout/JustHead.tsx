import Head from 'next/head'

export default function JustHead(){
    return <Head>
        <title>Juji | Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best." />
        <meta property="og:image" content="https://i.ibb.co/L6sFRMH/jujilogo.png" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
}