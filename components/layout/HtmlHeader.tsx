import Head from 'next/head'

export default function HtmlHeader(){
    return <Head>
        <title>Juji: Web Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Juji is a web developer. Living in Tangerang, Indonesia. Doing what he loves best." />
        <meta property="og:image" content="https://drive.google.com/uc?id=103n2AIwXf1UwtZA1SRgTiS6sDbZUrVSa" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#000000"></meta>
        <link rel="manifest" href="/manifest.json?v=1" />
    </Head>
}