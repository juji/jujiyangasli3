'use client';

import styles from './header.module.scss'
import Link from 'next/link'
import { Source_Serif_Pro } from 'next/font/google'
import { usePathname } from 'next/navigation';

// import version from '@/lib/version'

const sourceSerif = Source_Serif_Pro({
    subsets: ['latin'],
    weight: '400'
})

export default function Header(){

    const pathname = usePathname()
    const isNotHome = pathname !== '/';
    
    return <div 
        className={`${sourceSerif.className} ${styles.header} ${isNotHome ? styles.intersected : ''}`} 
        id="header">
        <Link title="Homepage" href={`/`} className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
    </div>

}