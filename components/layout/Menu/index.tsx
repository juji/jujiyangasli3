'use client'

import styled from './menu.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import isNotHome from '@/components/utils/isNotHome.interface'
import { usePathname } from 'next/navigation'
// import version from '@/lib/version'

export default function Menu({ 
    bottomPlacement, 
    className 
}:{
    bottomPlacement?: Boolean
    className?: string
}){

    const pathname = usePathname()
    const isNotHome = pathname !== '/'
        
    return <nav className={`${className} ${styled.menu} ${bottomPlacement?styled.bottomPlacement:styled.normalPlacement} ${isNotHome ? styled.isNotHome : ''}`} id="menu">
        <div className={styled.menuContainer}>
            <div className={styled.grid}>
                {isNotHome ? <div className="menuItem" id={styled.menuHome}>
                    <Link prefetch={false} title="Homepage" aria-label="Go to homepage" href={`/`}><TiHome /></Link>
                </div> : null}
                <div className="menuItem" id={styled.menuWorks}>
                    <Link prefetch={false} title="Works" className={pathname === '/works'?styled.active:''} href={`/works`}>works</Link>
                </div>
                <div className="menuItem" id={styled.menuTech}>
                    <Link prefetch={false} title="Technologies" className={pathname === '/tech'?styled.active:''} href={`/tech`}>tech</Link>
                </div>
                <div className="menuItem" id={styled.menuContact}>
                    <Link prefetch={false} title="Contact" className={pathname === '/contact'?styled.active:''} href={`/contact`}>contact</Link>
                </div>
            </div>
        </div>
    </nav>

}