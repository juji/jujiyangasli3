import Works from '@/components/Works'

export default function Home() {

  return <Works />

}


Home.getInitialProps = () => {
  return { asdf: true }
}