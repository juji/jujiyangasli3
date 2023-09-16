import WorkDetail from '@/components/Works/detail'
import MethodicateContent from '@/components/Works/contents/Methodicate'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Methodicate',
  openGraph: {
    ...openGraph,
    title: 'Methodicate',
    url: 'https://jujiyangasli.com/works/methodicate',
    siteName: 'Methodicate: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Methodicate'
  }
}

export default function Methodicate(){

    return <WorkDetail btz={true}>
      <MethodicateContent />
    </WorkDetail>

}

