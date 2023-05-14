import WorkDetail from '@/components/Works/detail'
import MethodicateContent from '@/components/Works/contents/Methodicate'
import Head from 'next/head'

export default function Methodicate(){

    return <>
        <Head>
            <title>Methodicate | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={false}>
            <MethodicateContent />
        </WorkDetail>
    </>

}

