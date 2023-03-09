import styles from './home.module.scss'

export default function Home(){

    return <div className={`${styles.hello}`} id="hello">
        <p className={styles.hellobig}>Hello,</p>
        <p className={styles.p1}>My name is <b>Tri Rahmat Gunadi</b>,</p>
        <p className={styles.p2}>but people call me <a rel='noreferrer noopener'
            target="_blank"
            href='https://github.com/juji'
            className={styles.juji}>juji</a>.</p>
        <p className={styles.p3}>I am a web developer.</p>
        <br />
        <div id="smiley" className={styles.smiley}>;)</div>
    </div>

}