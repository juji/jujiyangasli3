

import styled from './menu.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import isNotHome from '@/components/utils/isNotHome.interface'
import { useRouter } from 'next/router'
import version from '@/lib/version'

export default function Menu(props: isNotHome){

    const { isNotHome, bottomPlacement, className } = props;
    const router = useRouter()
        
    return <nav className={`${className} ${styled.menu} ${bottomPlacement?styled.bottomPlacement:styled.normalPlacement} ${isNotHome ? styled.isNotHome : ''}`} id="menu">
        <div className={styled.menuContainer}>
            <div className={styled.grid}>
                {isNotHome ? <div className="menuItem" id={styled.menuHome}>
                    <Link aria-label="Go to homepage" href={`/?v=${version}`}><TiHome /></Link>
                </div> : null}
                <div className="menuItem" id={styled.menuWorks}>
                    <Link className={router.pathname === '/works'?styled.active:''} href={`/works?v=${version}`}>works</Link>
                </div>
                <div className="menuItem" id={styled.menuTech}>
                    <Link className={router.pathname === '/tech'?styled.active:''} href={`/tech?v=${version}`}>tech</Link>
                </div>
                <div className="menuItem" id={styled.menuContact}>
                    <Link className={router.pathname === '/contact'?styled.active:''} href={`/contact?v=${version}`}>contact</Link>
                </div>
            </div>
        </div>
    </nav>

}