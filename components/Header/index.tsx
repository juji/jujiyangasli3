
import styles from './header.module.scss'
import Link from 'next/link'

export default function Header(){

    return <div className={styles.header}>
        <Link href='/' className={styles.logo}>juji&nbsp;{'}'};</Link>

        <div className={styles.hello}>
            <p className={styles.hellobig}>Hello,</p>
            <p className={styles.p1}>My name is <b>Tri Rahmat Gunadi</b>,</p>
            <p className={styles.p2}>but people call me <a rel='noreferrer noopener'
                target="_blank"
                href='https://github.com/juji'
                className={styles.juji}>juji</a>.</p>
            <p className={styles.p3}>I am a web developer.</p>
            {/* <p>living in&nbsp;
                <a rel='noreferrer noopener' 
                    target='_blank' 
                    href='https://goo.gl/maps/4pTkWU26o3kJQ17SA'>Tangerang</a>, Indonesia.
            </p> */}
            <br />
            <div className={styles.smiley}>;)</div>
        </div>
    </div>

}