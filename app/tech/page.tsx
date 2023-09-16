import TechPage from '@/components/Tech'
import { Metadata } from 'next';
import openGraph from '@/components/utils/tags/openGraph'
import twitter from '@/components/utils/tags/twitter'

export const metadata: Metadata = {
  title: 'Technologies',
  openGraph: {
    ...openGraph,
    title: 'Technologies',
    url: 'https://jujiyangasli.com/tech',
    siteName: 'Tech: jujiyangasli.com',
  },
  twitter: {
    ...twitter,
    title: 'Technologies'
  }
}

export default function Tech() {

  return <TechPage />

}
