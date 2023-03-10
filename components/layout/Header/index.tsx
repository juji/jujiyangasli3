
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import styles from './header.module.scss'
import Link from 'next/link'
import isNotHome from '@/components/utils/isNotHome.interface'

export default function Header(props: isNotHome){

    const { isNotHome } = props;
    
    return <div 
        className={`${styles.header} ${isNotHome ? styles.intersected : ''}`} 
        id="header">
        <Link href='/' className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
    </div>

}