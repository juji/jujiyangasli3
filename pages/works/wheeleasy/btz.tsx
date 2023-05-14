import WorkDetail from '@/components/Works/detail'
import WheeleasyContent from '@/components/Works/contents/Wheeleasy'
import Head from 'next/head'

export default function Wheeleasy(){

    return <>
        <Head>
            <title>Wheeleasy | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={true}>
            <WheeleasyContent />
        </WorkDetail>
    </>
}

