import WorkDetail from '@/components/Works/detail'
import BridestoryContent from '@/components/Works/contents/Bridestory'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Bridestory',
  openGraph: {
    ...openGraph,
    title: 'Bridestory',
    url: 'https://jujiyangasli.com/works/bridestory',
    siteName: 'Bridestory: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Bridestory'
  }
}

export default function Bridestory(){

    return <WorkDetail btz={true}>
      <BridestoryContent />
    </WorkDetail>

}
