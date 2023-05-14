import WorkDetail from '@/components/Works/detail'
import ClubrowContent from '@/components/Works/contents/Clubrow'
import Head from 'next/head'

export default function Clubrow(){

    return <>
        <Head>
            <title>Clubrow | Juji: Web Developer</title>
        </Head>
        <WorkDetail btz={true}>
            <ClubrowContent />
        </WorkDetail>
    </>

}
