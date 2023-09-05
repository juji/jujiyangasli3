'use client'

import styled from './footer.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import { usePathname } from 'next/navigation'

import menuItems from './menu.json'

export default function FooterMenu({ className }:{
  className?: string
}){

    const pathname = usePathname()
        
    return <nav className={`${className} ${styled.footerMenu}`}>
      <div className={`${styled.menuItem}`}>
          <Link 
              prefetch={false} 
              title="Homepage" aria-label="Go to homepage" href={`/`}><TiHome /></Link>
      </div>
      {menuItems.map(menu => (
          <div key={`menu-${menu.title}`} className={`${styled.menuItem}`}>
            <Link 
                prefetch={false} 
                title={menu.title} className={pathname === menu.url?styled.active:''} 
                href={menu.url}>{menu.text}</Link>
          </div>
      ))}
    </nav>

}