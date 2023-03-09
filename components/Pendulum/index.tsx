import { useState, useEffect, useRef } from 'react'
import styles from './pendulum.module.scss'
import PendulumFn from './doublePendulum'

export default function Pendulum(){

    const [ img, setImage ] = useState<string | null>(null)
    const [ started, setStarted ] = useState<number | null>(null)
    const timeout = useRef<ReturnType<typeof setTimeout> | null>()
    const startTime = useRef<number | null>()
    const innerW = useRef<number>(0)

    // handle resize event
    useEffect(() => {

        if(typeof window === 'undefined') return () => {};

        innerW.current = window.innerWidth

        const handleResize = () => {
            if(window.innerWidth === innerW.current) return;
            setImage(null)
            setStarted(null)
        }
        
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }


    },[ typeof window === 'undefined' ])


    // delay draw start
    useEffect(() => {
        if(timeout.current) clearTimeout(timeout.current)
        if(!started) timeout.current = setTimeout(() => {
            startTime.current = new Date().valueOf()
            setStarted(startTime.current)
        },500)
    },[ started ])

    return <div className={styles.pendulum} id="pendulum">
        
        <div className={styles.inside}>
            { img ? <img src={img} /> : started ? <canvas ref={r => PendulumFn(
                r, 
                started, 
                (uri: string, ts: number) => {
                    if(ts === startTime.current) setImage(uri)
                })}></canvas> : null }
        </div>

        <div className={styles.hello} id="hello">
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