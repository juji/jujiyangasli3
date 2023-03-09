
import styles from './header.module.scss'
import Link from 'next/link'

export default function Header(){

    return <div className={styles.header} id="header">
        <Link href='/' className={styles.logo} id="logo">juji&nbsp;{'}'};</Link>
    </div>

}