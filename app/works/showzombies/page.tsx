import WorksPage from '@/components/Works'
import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Works',
  openGraph: {
    ...openGraph,
    title: 'Works',
    url: 'https://jujiyangasli.com/works',
    siteName: 'Works: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Works'
  }
}

export default function Works() {

  return <WorksPage showAll={true} />

}