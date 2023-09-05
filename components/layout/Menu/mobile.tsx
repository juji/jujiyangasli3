'use client'

import { useState, useEffect } from 'react'
import styled from './mobile.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import menuItems from './menu.json'

export default function MenuMobile({ className }:{ className: string }){

  const pathname = usePathname()
  // const isNotHome = pathname !== '/'
  const [ open, setOpen ] = useState(false)

  useEffect(() => {
    setOpen(false)
  },[ pathname ])



  return <nav className={`${styled.menuMobile} ${className} ${open?styled.menuOpen:''}`}>
    <div className={styled.menuToggle}>
      <button className={`${styled.toggleButton}`} onClick={() => setOpen(!open)}>
        <span className={`${styled.openLine} ${styled.openTop}`}></span>
        <span className={`${styled.openLine} ${styled.openMiddle}`}></span>
        <span className={`${styled.openLine} ${styled.openBottom}`}></span>
      </button>
    </div>
    <div className={styled.menuContent}>
      <div className={styled.menuList}>

        <h4>Menu</h4>

        <div className={`${styled.menuItem} ${styled.menuHome}`}>
          <Link 
            title={"Home"} className={pathname === "/"?styled.active:''} 
            href={"/"}>Home</Link>
        </div>
        {menuItems.map(menu => (
            <div key={`menu-${menu.title}`} className={`${styled.menuItem} ${styled[menu.style]}`} >
              <Link 
                  prefetch={false} 
                  title={menu.title} className={pathname === menu.url?styled.active:''} 
                  href={menu.url}>{menu.title}</Link>
            </div>
        ))}
      </div>
    </div>
  </nav>

}