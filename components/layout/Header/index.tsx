
import styles from './header.module.scss'
import Link from 'next/link'
import isNotHome from '@/components/utils/isNotHome.interface'
import { Source_Serif_Pro } from 'next/font/google'
// import version from '@/lib/version'

const sourceSerif = Source_Serif_Pro({
    subsets: ['latin'],
    weight: '400'
})

export default function Header(props: isNotHome){

    const { isNotHome } = props;
    
    return <div 
        className={`${sourceSerif.className} ${styles.header} ${isNotHome ? styles.intersected : ''}`} 
        id="header">
        <Link title="Homepage" href={`/`} className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
    </div>

}