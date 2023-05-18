import WorkDetail from '@/components/Works/detail'
import ClubrowContent from '@/components/Works/contents/Clubrow'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Clubrow',
  openGraph: {
    ...openGraph,
    title: 'Clubrow',
    url: 'https://jujiyangasli.com/works/clubrow',
    siteName: 'Clubrow: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Clubrow'
  }
}

export default function Clubrow(){

    return <WorkDetail btz={false}>
      <ClubrowContent />
    </WorkDetail>

}
