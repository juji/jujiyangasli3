
import { useState, useEffect } from 'react'
import styled from './menu.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"
import isNotHome from '@/components/utils/isNotHome.interface'

export default function Menu(props: isNotHome){

    const { isNotHome, bottomPlacement } = props;

    const [ page, setPage  ] = useState<string | null>(null)

    useEffect(() => {
        typeof document !== 'undefined' && 
        document.location?.pathname && 
        setPage(document.location.pathname);
    },[ typeof document !== 'undefined' && document.location?.pathname ])
        
    return <nav className={`${styled.menu} ${bottomPlacement?styled.bottomPlacement:styled.normalPlacement} ${isNotHome ? styled.isNotHome : ''}`} id="menu">
        <div className={styled.menuContainer}>
            <div className={styled.grid}>
                {isNotHome ? <div className="menuItem" id={styled.menuHome}>
                    <Link href="/"><TiHome /></Link>
                </div> : null}
                <div className="menuItem" id={styled.menuWorks}>
                    <Link className={page?.match('/works')?styled.active:''} href="/works">works</Link>
                </div>
                <div className="menuItem" id={styled.menuTech}>
                    <Link className={page?.match('/tech')?styled.active:''} href="/tech">tech</Link>
                </div>
                <div className="menuItem" id={styled.menuContact}>
                    <Link className={page?.match('/contact')?styled.active:''} href="/contact">contact</Link>
                </div>
            </div>
        </div>
    </nav>

}