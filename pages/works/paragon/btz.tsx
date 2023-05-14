import WorkDetail from '@/components/Works/detail'
import ParagonContent from '@/components/Works/contents/Paragon'
import Head from 'next/head'

export default function Paragon(){

    return <>
        <Head>
            <title>Solo Paragon | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={true}>
            <ParagonContent />
        </WorkDetail>
    </>

}

