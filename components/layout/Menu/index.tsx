
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styled from './menu.module.scss'
import Link from 'next/link'
import { TiHome } from "react-icons/ti"

export default function Menu(){

    const router = useRouter()
    const [isHome, setisHome] = useState(false)
    useEffect(() => {
        setisHome(router.pathname === '/')
    },[ router.pathname ])

    return <div className={`${styled.menu} ${isHome ? '' : styled.intersected}`} id="menu">
        <div className={styled.menuContainer}>
            <div className={styled.grid}>
                {isHome ? null : <div className="menuItem" id={styled.menuHome}>
                    <Link href="/"><TiHome /></Link>
                </div>}
                <div className="menuItem" id={styled.menuWorks}>
                    <Link href="/works">works</Link>
                </div>
                <div className="menuItem" id={styled.menuTech}>
                    <Link href="/tech">tech</Link>
                </div>
                <div className="menuItem" id={styled.menuContact}>
                    <Link href="/contact">contact</Link>
                </div>
            </div>
        </div>
    </div>

}