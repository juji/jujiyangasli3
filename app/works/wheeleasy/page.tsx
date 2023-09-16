import WorkDetail from '@/components/Works/detail'
import WheeleasyContent from '@/components/Works/contents/Wheeleasy'

import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'WheelEasy',
  openGraph: {
    ...openGraph,
    title: 'WheelEasy',
    url: 'https://jujiyangasli.com/works/wheeleasy',
    siteName: 'WheelEasy: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'WheelEasy'
  }
}

export default function Wheeleasy(){

    return <WorkDetail btz={false}>
      <WheeleasyContent />
    </WorkDetail>
}

