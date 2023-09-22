'use client'

import styled from './menu.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import { usePathname } from 'next/navigation'
// import version from '@/lib/version'

import menuItems from './menu.json'

export default function Menu({ 
    topPlacement, 
    className 
}:{
    topPlacement?: Boolean
    className?: string
}){

    const pathname = usePathname()
    const isNotHome = pathname !== '/'
        
    return <nav className={`${className} ${styled.menu} ${topPlacement?styled.topPlacement:styled.normalPlacement} ${isNotHome ? styled.isNotHome : ''}`} id="menu">
        <div className={styled.menuContainer}>
            <div className={styled.grid}>
                {isNotHome ? <div className={`menuItem ${styled.menuHome}`}>
                    <Link 
                        // prefetch={false} 
                        title="Homepage" aria-label="Go to homepage" href={`/`}><TiHome /></Link>
                </div> : null}
                {menuItems.map(menu => (
                    <div key={`menu-${menu.title}`} className={`menuItem ${styled[menu.style]}`}>
                    <Link 
                        // prefetch={false} 
                        title={menu.title} className={pathname === menu.url?styled.active:''} 
                        href={menu.url}>{menu.text}</Link>
                    </div>
                ))}
            </div>
        </div>
    </nav>

}