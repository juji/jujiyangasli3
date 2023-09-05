import styled from './footer.module.scss'
import FooterMenu from '@/components/layout/Menu/footer'
import Link from 'next/link'

export default function Footer({ className }:{ className: string }){

  return <footer className={`${className} ${styled.footer}`}>
    <div>
      &copy; {new Date().getFullYear()} Tri Rahmat Gunadi (<Link 
        className={styled.mailToLink}
        target="_blank" href="mailto:him@jujiyangasli.com">him@jujiyangasli.com</Link>). 
        All&nbsp;rights&nbsp;reserved.
    </div>
    <FooterMenu className={styled.menu} />
  </footer>

}