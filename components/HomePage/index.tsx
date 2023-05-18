import styles from './home.module.scss'
import Menu from '@/components/layout/Menu'

import { Source_Code_Pro } from 'next/font/google'

const sourceCode = Source_Code_Pro({
    subsets: ['latin'],
    weight: '400'
})

export default function Home(){

    return <div className={`${styles.hello}`} id="hello">
        <h1 className={`${sourceCode.className} ${styles.hellobig}`}>Hello,</h1>
        <h2 className={styles.p1}>My name is <b>Tri Rahmat Gunadi</b>,</h2>
        <h2 className={styles.p2}>but people call me <a 
            title="Github Link"
            rel='noreferrer noopener'
            target="_blank"
            href='https://github.com/juji'
            className={styles.juji}>juji</a>.</h2>
        <h2 className={styles.p3}>I am a web developer.</h2>
        <br />
        <div id="smiley" className={styles.smiley}>;)</div>
        <Menu />
    </div>

}