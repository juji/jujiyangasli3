import WorkDetail from '@/components/Works/detail'
import BridestoryContent from '@/components/Works/contents/Bridestory'
import Head from 'next/head'

export default function Bridestory(){

    return <>
        <Head>
            <title>Bridestory | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={false}>
            <BridestoryContent />
        </WorkDetail>
    </>

}
