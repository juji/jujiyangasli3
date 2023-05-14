import WorkDetail from '@/components/Works/detail'
import AmberContent from '@/components/Works/contents/Amber'
import Head from 'next/head'

export default function Amber(){

    return <>
        <Head>
            <title>Amber | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={false}>
            <AmberContent />
        </WorkDetail>
    </>

}
