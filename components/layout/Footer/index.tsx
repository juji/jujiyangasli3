'use client';

import styled from './footer.module.scss'
import FooterMenu from '@/components/layout/Menu/footer'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

export default function Footer({ className }:{ className: string }){

  const pathname = usePathname()
  const isNotHome = pathname !== '/'

  return <footer className={`${className} ${styled.footer}`}>
    {isNotHome ? <FooterMenu className={styled.menu} /> : null}
    <div className={styled.copy}>
      <div>
      &copy; {new Date().getFullYear()} Tri Rahmat Gunadi (<Link 
        className={styled.mailToLink}
        target="_blank" href="mailto:him@jujiyangasli.com">him@jujiyangasli.com</Link>). 
        All&nbsp;rights&nbsp;reserved.
      </div>
    </div>
  </footer>

}