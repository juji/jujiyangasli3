'use client';

import styles from './header.module.scss'
import Link from 'next/link'
import { Source_Serif_4 } from 'next/font/google'
import { usePathname } from 'next/navigation';
import Menu from '@/components/layout/Menu'
import MobileMenu from '@/components/layout/Menu/mobile'
// import version from '@/lib/version'

const sourceSerif = Source_Serif_4({
    subsets: ['latin'],
    weight: '400'
})

export default function Header({ menuClassName }:{ menuClassName: string }){

    const pathname = usePathname()
    const isNotHome = pathname !== '/';
    
    return <div 
        className={`${sourceSerif.className} ${styles.header} ${isNotHome ? styles.intersected : ''}`} 
        id="header">
        <Link title="Homepage" href={`/`} className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
        <Menu className={`${styles.menu} ${menuClassName}`} topPlacement={true} />
        <MobileMenu className={menuClassName} />
    </div>

}