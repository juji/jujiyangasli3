
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
import Link from 'next/link'


export default function Header(){

    const router = useRouter()
    const [isHome, setisHome] = useState(false)
    useEffect(() => {
        setisHome(router.pathname === '/')
    },[ router.pathname ])
    
    return <div 
        className={`${styles.header} ${isHome ? '' : styles.intersected}`} 
        id="header">
        <Link href='/' className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
    </div>

}