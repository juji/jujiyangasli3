import WorkDetail from '@/components/Works/detail'
import AmberContent from '@/components/Works/contents/Amber'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Amber',
  openGraph: {
    ...openGraph,
    title: 'Amber',
    url: 'https://jujiyangasli.com/works/amber',
    siteName: 'Amber: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Amber'
  }
}

export default function Amber(){

    return <WorkDetail btz={false}>
      <AmberContent />
    </WorkDetail>

}
