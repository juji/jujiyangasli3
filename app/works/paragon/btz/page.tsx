import WorkDetail from '@/components/Works/detail'
import ParagonContent from '@/components/Works/contents/Paragon'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Solo Paragon',
  openGraph: {
    ...openGraph,
    title: 'Solo Paragon',
    url: 'https://jujiyangasli.com/works/paragon',
    siteName: 'Solo Paragon: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Solo Paragon'
  }
}

export default function Paragon(){

    return <WorkDetail btz={true}>
      <ParagonContent />
    </WorkDetail>
}

