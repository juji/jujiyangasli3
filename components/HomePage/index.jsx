import styles from './home.module.scss'

export default function Home(){

    return <div className={`${styles.hello}`} id="hello">
        <h1 className={styles.hellobig}>Hello,</h1>
        <h2 className={styles.p1}>My name is <b>Tri Rahmat Gunadi</b>,</h2>
        <h2 className={styles.p2}>but people call me <a rel='noreferrer noopener'
            target="_blank"
            href='https://github.com/juji'
            className={styles.juji}>juji</a>.</h2>
        <h2 className={styles.p3}>I am a web developer.</h2>
        <br />
        <div id="smiley" className={styles.smiley}>;)</div>
    </div>

}